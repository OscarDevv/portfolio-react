import DarkVeil from "../../parts/DarkVeil";
import HeroGlass from "../HeroGlass";
import CircleIcon from "../../parts/CircleIcon";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const nextSectBtnRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="w-full h-200 min-h-screen relative">
      <DarkVeil
        hueShift={40}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1}
        scanlineFrequency={0}
        warpAmount={0}
      />

      <HeroGlass />

      <div
        className="absolute right-0 bottom-0 w-55.75 h-26.25 bg-slate-900/60 rounded-tl-[50px] border-t-2 border-l-2 border-slate-500 backdrop-blur-xs z-40"
        ref={nextSectBtnRef}
      >
        <div className="relative w-full h-26.25">
          <CircleIcon
            to="#about"
            icon={faCircleArrowDown}
            classes="absolute left-[50%] top-[50%] translate-[-50%] scale-125 text-cyan-300 hover:text-cyan-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
