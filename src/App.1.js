import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };
  return (
    <>
      <Particles
        init={particlesInitialization}
        option={{ preset: "fireworks" }}
      />{" "}
      <div className="flex flex-col justify-center item-center min-h-screen">
        <span className="text-white text-4xl font-cold z-50">
          SELAMAT TAHUN BARU 2025!
        </span>{" "}
      </div>{" "}
    </>
  );
}
