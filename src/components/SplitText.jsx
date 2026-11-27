// Adaptado de React Bits (reactbits.dev/text-animations/split-text) — MIT.
// Añadido: guarda de prefers-reduced-motion (el original no la tenía; sin
// ella el texto quedaría animando con GSAP sin importar la preferencia del
// usuario, ya que GSAP anima estilos inline y no lo detiene la regla global
// `transition/animation: none !important` de styles.css).
//
// Carga por partes (nov 2026): GSAP ya no va en el JS principal de todas las
// páginas; se descarga solo cuando la animación de verdad se va a ejecutar.
// GSAP se descarga recién cuando el texto se acerca a la pantalla. Y si el
// texto ya está a la vista al cargar (llegó pintado en el HTML prerenderizado),
// no se vuelve a animar: ocultarlo para animarlo de nuevo sería un parpadeo.
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const loadGsap = () =>
  Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('gsap/SplitText')]).then(
    ([{ gsap }, { ScrollTrigger }, { SplitText }]) => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      return { gsap, ScrollTrigger, GSAPSplitText: SplitText };
    }
  );

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  // true si el texto ya llegó pintado: la página vino prerenderizada y esta es
  // la primera URL de la visita (React Router marca esa entrada con key
  // 'default'; al navegar dentro de la web cada página nueva trae otra key).
  const { key: locationKey } = useLocation();
  const hydratedRef = useRef(
    typeof window !== 'undefined' && Boolean(window.__EPD_PRERENDERED__) && locationKey === 'default'
  );

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !text) return;
    if (animationCompletedRef.current) return;

    // Si el texto ya está a la vista y llegó pintado en el HTML (primera carga),
    // o hay reduced-motion: se queda quieto (ocultarlo para animarlo de nuevo
    // se vería como un parpadeo).
    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if ((hydratedRef.current && onScreen) || prefersReducedMotion()) {
      animationCompletedRef.current = true;
      onCompleteRef.current?.();
      return;
    }

    let cancelled = false;
    let cleanup = null;
    let observer = null;

    const run = async () => {
      const { gsap, ScrollTrigger, GSAPSplitText } = await loadGsap();
      if (document.fonts && document.fonts.status !== 'loaded') await document.fonts.ready;
      if (cancelled) return;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {
          /* noop */
        }
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets;
      const assignTargets = self => {
        if (splitType.includes('chars') && self.chars.length) targets = self.chars;
        if (!targets && splitType.includes('words') && self.words.length) targets = self.words;
        if (!targets && splitType.includes('lines') && self.lines.length) targets = self.lines;
        if (!targets) targets = self.chars || self.words || self.lines;
      };

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: self => {
          assignTargets(self);
          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onCompleteRef.current?.();
              },
              willChange: 'transform, opacity',
              force3D: true
            }
          );
        }
      });

      el._rbsplitInstance = splitInstance;

      cleanup = () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {
          /* noop */
        }
        el._rbsplitInstance = null;
      };
    };

    // Más abajo en la página: GSAP se descarga recién cuando el texto se
    // acerca a la pantalla (300px antes), lo justo para dejarlo listo.
    if (onScreen || typeof IntersectionObserver === 'undefined') {
      run();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            run();
          }
        },
        { rootMargin: '300px 0px' }
      );
      observer.observe(el);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin]);

  const renderTag = () => {
    const style = {
      textAlign,
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent ${className}`;
    const Tag = tag || 'p';

    return (
      <Tag ref={ref} style={style} className={classes}>
        {text}
      </Tag>
    );
  };
  return renderTag();
};

export default SplitText;
