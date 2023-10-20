import React, { Suspense } from "react";
import { type MeshProps, useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";

function AppfolioLogo(props: MeshProps) {
  const gltf = useLoader(GLTFLoader, "./appfolio.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
}

export default function LogoScene() {
  return (
    <Canvas
      camera={{
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 75,
        position: [0, 0, 5],
      }}
      className="h-full"
      orthographic
    >
      <Suspense fallback={null}>
        <AppfolioLogo />
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <Environment preset="sunset" background={false} />
      </Suspense>
    </Canvas>
  );
}
