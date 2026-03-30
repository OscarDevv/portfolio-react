import DarkVeil from "../../parts/DarkVeil";
import HeroGlass from "../HeroGlass";
import CircleIcon from "../../parts/CircleIcon";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import OtimizationContext from "../../parts/OtimizationProvider/OtimizationContext.js";

function Hero() {
  const nextSectBtnRef = useRef(null);
  const { slowMode } = useContext(OtimizationContext);

  useEffect(() => {
    if (!slowMode) {
      gsap.fromTo(
        nextSectBtnRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
        },
      );
    }
  }, [slowMode]);

  return (
    <div
      className={`relative w-full min-h-screen h-200 ${slowMode ? "bg-linear-180 from-slate-950 to-cyan-800" : ""}`}
    >
      {!slowMode && (
        <DarkVeil
          hueShift={40}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      )}

      <HeroGlass />

      <div
        className="absolute right-0 bottom-0 z-40 w-55.75 h-26.25 bg-slate-900/60 border-t-2 border-l-2 border-slate-500 rounded-tl-[50px] backdrop-blur-xs"
        ref={nextSectBtnRef}
      >
        <div className="relative w-full h-26.25">
          <CircleIcon
            to="#about"
            icon={faCircleArrowDown}
            classes="absolute top-[50%] left-[50%] text-cyan-300 translate-[-50%] scale-125 hover:text-cyan-500"
            aria-label="Ir para seção Sobre Mim"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
