import Navbar from "../Navbar";
import CircleIcon from "../../parts/CircleIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1",
      },
    );
  }, []);

  return (
    <header
      className="flex items-center gap-10 fixed top-0 w-full z-10 text-neutral-300"
      ref={headerRef}
    >
      <div className="bg-slate-950/50 py-8 px-16 rounded-br-[50px] border-r-2 border-b-2 border-slate-500 backdrop-blur-xs">
        <h1 className="font-bold text-4xl select-none">Oscar</h1>
      </div>

      <div className="flex justify-center items-center gap-5 w-fit bg-slate-950/50 border-2 border-slate-500 font-semibold px-7 py-2 rounded-full backdrop-blur-xs">
        <Navbar />
        <CircleIcon
          to="https://github.com/OscarDevv"
          icon={faGithub}
          target="_blank"
          classes="text-cyan-100 hover:text-cyan-400"
        />
      </div>
    </header>
  );
}

export default Header;
