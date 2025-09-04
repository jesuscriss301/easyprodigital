// Efecto al hacer scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animación de burbujas

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname !== "/service/index.html") {
    return; // no mostrar en otras páginas
  }
  const container = document.getElementById('bubbles-container');
  let bubbles = [];
  const techIcons = [
    // Iconos de Servicios Principales
    { icon: 'fas fa-code', color: '#071F42', name: 'Web Development' },
    { icon: 'fas fa-mobile-alt', color: '#117EAD', name: 'Mobile Apps' },
    { icon: 'fas fa-cloud', color: '#0F8E80', name: 'SaaS Solutions' },
    { icon: 'fas fa-search-dollar', color: '#41A116', name: 'SEO Services' },
    { icon: 'fas fa-bullhorn', color: '#E74C3C', name: 'Digital Marketing' },

    // Iconos de Características
    { icon: 'fas fa-chart-line', color: '#117EAD', name: 'Growth' },
    { icon: 'fas fa-laptop-code', color: '#F1C40F', name: 'Web Apps' },
    { icon: 'fas fa-shopping-cart', color: '#E74C3C', name: 'E-commerce' },

    // Iconos de Tecnología
    { icon: 'fab fa-react', color: '#61DAFB', name: 'React' },
    { icon: 'fab fa-node-js', color: '#339933', name: 'Node.js' },
    { icon: 'fab fa-python', color: '#3776AB', name: 'Python' },

    // Iconos de Métricas
    { icon: 'fas fa-lock', color: '#071F42', name: 'Security' },
    { icon: 'fas fa-sync-alt', color: '#41A116', name: 'Updates' },
    { icon: 'fas fa-users', color: '#F1C40F', name: 'Team' },

    // Iconos de Soporte
    { icon: 'fas fa-headset', color: '#0F8E80', name: 'Support' },
    { icon: 'fas fa-calendar-check', color: '#E74C3C', name: 'Planning' }
  ];

  // Verificar si ya hay burbujas creadas
  const existingBubbles = container.querySelectorAll('.tech-bubble');
  if (existingBubbles.length === 0) {
    createBubbles();
  }

  function createBubbles() {
    // Limpiar contenedor por si acaso
    container.innerHTML = '';
    bubbles = [];

    techIcons.forEach((tech) => {
      const bubble = document.createElement('div');
      bubble.className = 'tech-bubble';

      // Tamaño aleatorio entre 40px y 70px
      const size = Math.floor(Math.random() * 30) + 40;
      const fontSize = Math.floor(size * 0.5);

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.fontSize = `${fontSize}px`;

      bubble.innerHTML = `<i class="${tech.icon}"></i>`;
      bubble.style.color = tech.color;

      // Posición inicial aleatoria
      const posX = Math.random() * (400 - size);
      const posY = Math.random() * (400 - size);

      // Velocidad inicial aleatoria (más lenta para burbujas grandes)
      const baseSpeed = 1.5;
      const speedFactor = 60 / size; // Las más grandes se mueven más lento
      const velocityX = (Math.random() - 0.5) * baseSpeed * speedFactor;
      const velocityY = (Math.random() - 0.5) * baseSpeed * speedFactor;

      bubble.style.left = `${posX}px`;
      bubble.style.top = `${posY}px`;

      container.appendChild(bubble);

      bubbles.push({
        element: bubble,
        x: posX,
        y: posY,
        vx: velocityX,
        vy: velocityY,
        size: size
      });
    });

    // Iniciar animación solo si hay burbujas
    if (bubbles.length > 0) {
      animate();
    }
  }

  // Animación con colisiones mejoradas
  function animate() {
    const containerWidth = 400;
    const containerHeight = 400;

    bubbles.forEach(bubble => {
      // Mover burbuja
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;

      // Rebotar en bordes con ángulo de reflexión
      if (bubble.x <= 0 || bubble.x + bubble.size >= containerWidth) {
        bubble.vx *= -0.9;
        // Ajustar posición para evitar atascos en el borde
        bubble.x = bubble.x <= 0 ? 0 : containerWidth - bubble.size;
      }

      if (bubble.y <= 0 || bubble.y + bubble.size >= containerHeight) {
        bubble.vy *= -0.9;
        bubble.y = bubble.y <= 0 ? 0 : containerHeight - bubble.size;
      }

      // Aplicar posición
      bubble.element.style.left = `${bubble.x}px`;
      bubble.element.style.top = `${bubble.y}px`;
    });

    // Detección de colisiones mejorada
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const b1 = bubbles[i];
        const b2 = bubbles[j];

        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = (b1.size / 2 + b2.size / 2);

        if (distance < minDistance) {
          // Calcular ángulo de colisión
          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);

          // Calcular masa relativa (basada en tamaño)
          const m1 = b1.size / 50;
          const m2 = b2.size / 50;

          // Velocidades en el sistema de coordenadas rotado
          const vx1 = b1.vx * cos + b1.vy * sin;
          const vy1 = b1.vy * cos - b1.vx * sin;
          const vx2 = b2.vx * cos + b2.vy * sin;
          const vy2 = b2.vy * cos - b2.vx * sin;

          // Conservación del momento con masa
          const vx1Final = ((m1 - m2) * vx1 + 2 * m2 * vx2) / (m1 + m2);
          const vx2Final = ((m2 - m1) * vx2 + 2 * m1 * vx1) / (m1 + m2);

          // Aplicar nuevas velocidades
          b1.vx = vx1Final * cos - vy1 * sin;
          b1.vy = vy1 * cos + vx1Final * sin;
          b2.vx = vx2Final * cos - vy2 * sin;
          b2.vy = vy2 * cos + vx2Final * sin;

          // Separación para evitar solapamiento
          const overlap = minDistance - distance + 1;
          const moveX = overlap * cos * 0.5;
          const moveY = overlap * sin * 0.5;

          b1.x -= moveX;
          b1.y -= moveY;
          b2.x += moveX;
          b2.y += moveY;
        }
      }
    }

    requestAnimationFrame(animate);
  }
});

// seccion animatios error 404

// Efecto de parpadeo aleatorio adicional
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname !== "/404.html") {
    return; // no mostrar en otras páginas
  }
  const glitchEffect = document.querySelector('.glitch-effect');

  function randomGlitch() {
    setTimeout(function () {
      glitchEffect.style.opacity = '0.1';
      glitchEffect.style.clipPath = `rect(${Math.random() * 100}px, ${Math.random() * 300 + 300}px, ${Math.random() * 300 + 300}px, ${Math.random() * 100}px)`;

      setTimeout(function () {
        glitchEffect.style.opacity = '0';
      }, 100);

      randomGlitch();
    }, Math.random() * 4000 + 1000);
  }

  randomGlitch();
});
