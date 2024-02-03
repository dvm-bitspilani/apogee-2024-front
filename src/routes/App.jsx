import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, ScrollControls } from "@react-three/drei";

import { motion } from "framer-motion";
import Loader from "@components/Loader";
// import { Scene } from "@components/Landing/Scene";
import { Hud } from "@components/Landing/HUD";
import ContactHUD from "@components/Contact/ContactHUD";
import EffectComposerLayer from "../components/EffectComposer";
// import Background from "../components/Landing/Background";
import Experience from "../components/Landing/Experience";
// import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <Canvas>
        {/* <EffectComposerLayer /> */}
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />
          <Experience />
        </Suspense>
        <Stats />
      </Canvas>
      <Hud />
      <ContactHUD />
    </motion.div>
  );
}

export default App;
