/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useState, useEffect, useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import { gsap } from "gsap";

// import { EffectComposer, Outline, SelectiveBloom } from "@react-three/postprocessing";
// import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import state from "../state";

export function Asteroid(props) {
  const { nodes, materials } = useGLTF("/models/asteroid3.glb");

  const asteroidRef = useRef();
  const asteroidMeshRef = useRef();

  const [clicked, setClicked] = useState(false);
  const [direction, setDirection] = useState(new THREE.Vector3());

  // const [isDestroyed, setIsDestroyed] = useState(false);

  // const { position } = useControls("Asteroid", {
  //   position: {
  //     value: [-9, 10, -12],
  //     step: 0.1,
  //     label: "Position",
  //   },
  // });

  const randomMultiplier = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const [xMultiplier, yMultiplier, zMultiplier] = useMemo( () =>
    Array.from({ length: 3 }, () => randomMultiplier(0.003, 0.015)),
    []
  );
  //   Array.from({ length: 3 }, () => randomMultiplier(0.003, 0.015)),
  //   []
  // );

  const [omegaX, omegaY, omegaZ] = useMemo( () =>
    Array.from({ length: 3 }, () => randomMultiplier(0.1, 0.3)),
    []
  );

  const [ampX, ampZ] = useMemo( () =>
    Array.from({ length: 2 }, () => randomMultiplier(4, 10)),
    []
  );

  const [addX, addY, addZ] = useMemo( () =>
    Array.from({ length: 3 }, () => randomMultiplier(-Math.PI, Math.PI)),
    []
  );

  const scale = useMemo( () => randomMultiplier(0.15, 0.5), []);

  const [ampY] = useMemo( () => Array.from({ length: 1 }, () => randomMultiplier(1, 3)), []);

  useFrame((state, delta) => {
    asteroidRef.current.rotation.y += delta;
    asteroidRef.current.rotation.x += delta;

    if (clicked) {
      asteroidRef.current.position.x += direction.x * xMultiplier;
      asteroidRef.current.position.y += direction.y * yMultiplier;
      asteroidRef.current.position.z += direction.z * zMultiplier;
    } else {
      asteroidRef.current.position.x =
        ampX * Math.sin((state.clock.elapsedTime + addX) * omegaX);
      asteroidRef.current.position.y =
        ampY * Math.sin((state.clock.elapsedTime + addY) * omegaY);
      asteroidRef.current.position.z =
        ampZ * Math.cos((state.clock.elapsedTime + addZ) * omegaZ);
    }
  });

  const handleClick = (e) => {
    setClicked(true);
    const direction = new THREE.Vector3(...e.point);
    setDirection(direction);
  };

  return (
    <>
      <group
        ref={asteroidRef}
        {...props}
        dispose={null}
        // onClick={addExplosion}
        onClick={handleClick}
      >
        <mesh
          ref={asteroidMeshRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          scale={scale}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models.asteroid3.glb");
