import Navbar from "../Navbar";
import CircleIcon from "../CircleIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState, useContext } from "react";
import gsap from "gsap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OtimizationContext from "../OtimizationProvider/OtimizationContext";

function Header() {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navAnimation, setNavAnimation] = useState(
    () => window.innerWidth < 768,
  );
  const { slowMode } = useContext(OtimizationContext);

  useEffect(() => {
    if (!slowMode) {
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
    }
  }, [slowMode]);

  function toggleMenu() {
    setIsNavOpen((prev) => !prev);
    setNavAnimation((prev) => !prev);
  }

  return (
    <header
      className="fixed top-0 z-50 flex items-center justify-between gap-0 w-screen pr-6 text-neutral-300 bg-slate-950/50 border-b-2 border-slate-500 backdrop-blur-xs md:justify-start md:gap-10 md:pr-16 md:m-0 md:bg-transparent md:backdrop-blur-none md:border-0 md:rounded-none"
      ref={headerRef}
    >
      <div className="px-6 py-8 border-slate-500 md:px-16 md:bg-slate-950/50 md:border-r-2 md:border-b-2 md:rounded-br-[50px] md:backdrop-blur-xs">
        <h1 className="text-4xl font-heading select-none">Oscar</h1>
      </div>

      <div className="relative flex items-center justify-center gap-5 w-fit px-7 py-2 font-semibold bg-slate-950/50 border-2 border-slate-500 rounded-full backdrop-blur-xs">
        <Navbar isDisplayed={isNavOpen} animation={navAnimation} />

        <button
          onClick={toggleMenu}
          aria-label="Mostrar/Esconder menu de navegação"
          title="Mostrar/Esconder menu de navegação"
          className="cursor-pointer text-2xl text-cyan-100 transition-colors duration-200 hover:text-cyan-400 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <CircleIcon
          to="https://github.com/OscarDevv"
          icon={faGithub}
          target="_blank"
          aria-label="Ir para a conta do GitHub do Oscar"
          classes="text-cyan-100 hover:text-cyan-400"
        />
      </div>
    </header>
  );
}

export default Header;
