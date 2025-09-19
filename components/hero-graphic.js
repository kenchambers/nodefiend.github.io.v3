// code pen: https://codesandbox.io/embed/r3f-montage-jz9l97qn89
// NOTE: dynamically import non server side rendered things:
// https://github.com/asyncapi/asyncapi-react/issues/177#issuecomment-729823940
// NOTE: dynamic import with laoding:
// https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/

/* eslint-disable */

import * as THREE from "three";
import { useColorMode } from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export const darkModeColors = ["#121a24", "#1b2736", "#223247", "#0e1726"];

export const lightModeColors = ["#f5f1e6", "#f6f2e9", "#f0ecdd", "#ebe6d3"];

export default React.memo(function HeroGraphic() {
  const { colorMode } = useColorMode();
  // Accent colors used across the app
  const accentColor = colorMode === "light" ? "#96bb7c" : "#ff6363";

  const COUNT = 120;

  const Lights = () => {
    const isLight = colorMode === "light";
    return (
      <group>
        <ambientLight intensity={isLight ? 1.0 : 1.2} />
        <hemisphereLight
          args={[
            isLight ? "#ffffff" : "#cbd5ff",
            isLight ? "#d7d0bf" : "#2a2f46",
            isLight ? 0.8 : 1.0,
          ]}
        />
        <directionalLight
          position={[5, 10, 10]}
          intensity={isLight ? 1.0 : 1.2}
          color={isLight ? "#ffffff" : "#c6d0ff"}
        />
        <directionalLight
          position={[-6, -4, -8]}
          intensity={isLight ? 0.4 : 0.6}
          color={isLight ? "#ffffff" : "#9fb4ff"}
        />
      </group>
    );
  };

  const FloatingTiles = () => {
    const meshRef = useRef();
    const groupRef = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const { pointer } = useThree();

    const items = useMemo(() => {
      return new Array(COUNT).fill(0).map(() => {
        const radius = THREE.MathUtils.lerp(10, 80, Math.random());
        const angle = Math.random() * Math.PI * 2;
        const speed =
          THREE.MathUtils.lerp(0.05, 0.35, Math.random()) *
          (Math.random() > 0.5 ? 1 : -1);
        const yPhase = Math.random() * Math.PI * 2;
        const yAmp = THREE.MathUtils.lerp(0.5, 3, Math.random());
        const scale = THREE.MathUtils.lerp(0.6, 2.4, Math.random());
        const tilt = THREE.MathUtils.lerp(-0.45, 0.45, Math.random());
        return { radius, angle, speed, yPhase, yAmp, scale, tilt };
      });
    }, []);

    useEffect(() => {
      if (!meshRef.current) return;
      const base = new THREE.Color(accentColor);
      for (let i = 0; i < COUNT; i++) {
        meshRef.current.setColorAt(i, base);
      }
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
      if (meshRef.current.material) {
        meshRef.current.material.needsUpdate = true;
      }
    }, [accentColor]);

    useFrame((state, delta) => {
      if (!meshRef.current) return;

      if (groupRef.current) {
        groupRef.current.rotation.x = THREE.MathUtils.damp(
          groupRef.current.rotation.x,
          -pointer.y * 0.2,
          3,
          delta
        );
        groupRef.current.rotation.y = THREE.MathUtils.damp(
          groupRef.current.rotation.y,
          pointer.x * 0.3,
          3,
          delta
        );
      }

      for (let i = 0; i < COUNT; i++) {
        const it = items[i];
        it.angle += it.speed * delta;
        const x = Math.cos(it.angle) * it.radius;
        const z = Math.sin(it.angle) * it.radius;
        const y = Math.sin(state.clock.elapsedTime + it.yPhase) * it.yAmp * 2;

        dummy.position.set(x, y, z);
        dummy.rotation.set(0, 0, it.angle * 0.5 + it.tilt);
        dummy.scale.set(it.scale, it.scale, 0.18 * it.scale);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
      <group ref={groupRef}>
        <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial
            vertexColors
            roughness={0.5}
            metalness={0}
            transparent
            opacity={0.95}
            toneMapped={false}
          />
        </instancedMesh>
      </group>
    );
  };

  const graphicStyles = {
    zIndex: 999,
    position: "absolute",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={graphicStyles}>
      <Canvas
        dpr={[1, 1.5]}
        shadows={false}
        camera={{ position: [0, 0, 60], fov: 60 }}
      >
        <Lights />
        <FloatingTiles />
      </Canvas>
    </div>
  );
});
