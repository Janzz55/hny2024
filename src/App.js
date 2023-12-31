import Particles from "react-particles"
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import {Typewriter} from "react-simple-typewriter"
import {useState} from "react"
import Countdown from "react-countdown"

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!!"])

  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

function timeleft() {
  const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
  const newDate = new Date().getTime()
  const reminingTime = newYearDate - newDate
  return reminingTime
 }

  return (
 <>
    <Particles 
      init={particleInitialization}
      options={{ preset: "fireworks" }}
    />
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
    <span className="text-white text-4xl font-bold px-4 z-50">
    <Typewriter 
      words={newYearMessage} 
      loop={false}
      cursorStyle={"_"}
      cursor
      typeSpeed={5}
      deleteSpeed={10}
      />
    </span>
    <div className="z-50 text-white font-bold text-2xl">
    <Countdown date={Date.now() + timeleft()} onComplete={() => setNewYearMessage([
    "Selamat","Tahun","Baru","Happy New Year 2024"
    ])}/>
    </div>

    </div>
 </>   
  );
}

export default App;
