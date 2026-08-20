/* eslint-disable react/no-unknown-property */
// SparkModel — sustituto de "Model Viewer" para el nicho de electricistas.
//
// El componente real de React Bits (ModelViewer) carga un archivo .glb/.gltf
// externo vía @react-three/drei's useGLTF — este proyecto no tiene ningún
// modelo 3D de electricista (bombilla, panel, herramienta) disponible como
// asset, y descargar uno genérico de un CDN no verificado no es una opción
// aceptable aquí. En vez de renunciar al pedido ("Model Viewer" para
// Electricistas) o mostrar un modelo irrelevante, este componente reutiliza
// exactamente las mismas dependencias reales (three + @react-three/fiber +
// @react-three/drei) para construir una escena 3D orbitable propia — una
// bombilla incandescente con filamento brillante y base roscada — sin
// depender de ningún archivo externo. Mismo presupuesto de librerías, mismo
// efecto "objeto 3D interactivo que gira con el mouse", cero deuda de assets.
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Núcleo de brillo: una esfera emisiva pequeña en vez de un filamento en
// forma de anillo — un anillo visto de canto en cierto ángulo de rotación
// puede leer como una raya en vez de un foco de luz; una esfera se ve igual
// de "encendida" desde cualquier ángulo, así que es la opción robusta para
// algo que gira sin parar.
function GlowCore({ color }) {
  return (
    <mesh>
      <sphereGeometry args={[0.1, 20, 20]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} toneMapped={false} />
    </mesh>
  );
}

function Bulb({ glassColor, filamentColor, autoRotateSpeed }) {
  const outer = useRef(null);

  useFrame((_, dt) => {
    if (outer.current) outer.current.rotation.y += dt * autoRotateSpeed;
  });

  return (
    <group ref={outer} rotation={[0, 0.6, 0]}>
      {/* Ampolla de vidrio — opacidad simple, sin `transmission` física
          (ese material necesita un environment map para verse bien; sin
          uno, el sampler cae sobre el fondo del canvas y produce un halo
          difuso enorme en vez de vidrio). Opacidad plana es más humilde
          pero predecible. */}
      <mesh position={[0, 0.32, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial color={glassColor} transparent opacity={0.32} roughness={0.4} metalness={0} />
      </mesh>

      {/* Núcleo incandescente */}
      <group position={[0, 0.32, 0]}>
        <GlowCore color={filamentColor} />
      </group>
      {/* Nota: deliberadamente SIN pointLight junto al núcleo — un punto de
          luz cerca de una superficie curva (el cuello, la base) genera una
          raya especular larga a lo largo del cilindro que se leía como un
          rayo disparado fuera de la bombilla. El material emisivo del
          GlowCore ya se ve "encendido" sin necesitar una luz física real
          que ilumine el resto de la geometría. */}

      {/* Cuello */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.18, 0.21, 0.16, 32]} />
        <meshStandardMaterial color="#d9d9d9" roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Base roscada (Edison screw), simplificada a una sola pieza cónica
          con rugosidad alta para evitar rayas especulares en una curva. */}
      <mesh position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.17, 0.185, 0.28, 24, 1]} />
        <meshStandardMaterial color="#b8860b" roughness={0.75} metalness={0.35} />
      </mesh>
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.1, 0.14, 0.06, 24]} />
        <meshStandardMaterial color="#4a4a4a" roughness={0.75} metalness={0.3} />
      </mesh>
    </group>
  );
}

export default function SparkModel({
  glassColor = '#fff7e0',
  filamentColor = '#ffb020',
  autoRotateSpeed = 0.35,
  enableZoom = false,
}) {
  return (
    <div className="spark-model" style={{ position: 'absolute', inset: 0, touchAction: 'pan-y pinch-zoom' }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ fov: 42, position: [0, 0.1, 3.1], near: 0.1, far: 20 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Solo luces locales: nada de HDRI externo (drei's <Environment
            preset=".."/> baja un .hdr de un CDN externo en runtime — un
            fallo de red ahí no debe poder tumbar toda la página, y en este
            proyecto ya se decidió no depender de assets externos no
            verificados, ver la misma discusión para face-api.js en
            GridScan). Cuatro luces alrededor bastan para que el vidrio y el
            metal de la base lean bien sin red. */}
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 3]} intensity={0.6} />
        <directionalLight position={[-3, 1, -2]} intensity={0.3} />
        <Suspense fallback={null}>
          <Bulb glassColor={glassColor} filamentColor={filamentColor} autoRotateSpeed={autoRotateSpeed} />
        </Suspense>
        <ContactShadows position={[0, -0.68, 0]} opacity={0.3} scale={2.4} blur={2.2} far={1.2} />
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={enableZoom}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
}
