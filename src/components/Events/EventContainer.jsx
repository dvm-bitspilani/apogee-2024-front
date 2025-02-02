import { useThree } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";

import { useControls } from "leva";
import OpenButton from "./OpenButton";

import placeholder from "@assets/events/event-cat-placeholder.png";
import { useEffect, useMemo, useRef } from "react";

import * as THREE from "three";

export default function EventContainer(props) {
  const { position, data } = props;
  const { viewport } = useThree();

  // const { xPercent, yPercent } = useControls("EventContainer", {
  //   xPercent: {
  //     value: 0.62,
  //     step: 0.01,
  //     min: 0,
  //     max: 1,
  //   },
  //   yPercent: {
  //     value: 0.54,
  //     step: 0.01,
  //     min: 0,
  //     max: 1,
  //   },
  // });

  // const { textPosition } = useControls("EventContainer", {
  //   textPosition: {
  //     value: [-0.45, 0.37, 0],
  //     step: 0.01,
  //   },
  // });

  const xPercent = useMemo(() => 0.62, []);
  const yPercent = useMemo(() => 0.54, []);
  const textPosition = useMemo(() => [-0.4, 0.38, 0], []);

  const imgRef = useRef();

  // useEffect(() => {
  //   const box = new THREE.Box3().setFromObject(imgRef.current);
  //   const size = box.getSize(new THREE.Vector3());

  //   imgRef.current.position.x -= size.x / 2;
  //   imgRef.current.position.y -= size.y / 2;
  // }, [viewport]);

  return (
    <group position={position}>
      <mesh>
        <planeGeometry
          attach="geometry"
          args={[xPercent * viewport.width, yPercent * viewport.height]}
        />
        <meshBasicMaterial
          attach="material"
          color="#314557"
          opacity={0}
          transparent
        />
      </mesh>
      <Text
        anchorX={"left"}
        position={[
          viewport.width * textPosition[0] * xPercent,
          viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        font="/fonts/Alacrity Sans Bold.ttf"
        fontSize={Math.min(viewport.width * 0.03, 0.4)}
        maxWidth={viewport.width * xPercent}
      >
        {data.name}
        <meshStandardMaterial
          attach="material"
          color={"#9AF0F4"}
          emissiveIntensity={1.5}
          emissive={"#9AF0F4"}
          toneMapped={false}
        />
      </Text>
      <Image
        ref={imgRef}
        position={[0, viewport.height * (textPosition[1] - 0.35) * yPercent, 0]}
        url={placeholder}
        scale={[
          viewport.width * xPercent * 0.8,
          viewport.height * yPercent * 0.55,
          1,
        ]}
      />
      <OpenButton
        position={[
          // -viewport.width * textPosition[0] * xPercent,
          0,
          -viewport.height * textPosition[1] * yPercent,
          0,
        ]}
        link={data.name}
      />
    </group>
  );
}
