import Navbar from "../Navbar";
import CircleIcon from "../../parts/CircleIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navAnimation, setNavAnimation] = useState(
    () => window.innerWidth < 768,
  );

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

  function toggleMenu() {
    setIsNavOpen((prev) => !prev);
    setNavAnimation((prev) => !prev);
  }

  return (
    <header
      className="flex justify-between items-center gap-0 md:gap-10 pr-6 md:pr-16 bg-slate-950/50 backdrop-blur-xs fixed top-0 w-screen z-50 text-neutral-300 border-slate-500 border-b-2 md:border-0 md:m-0 md:rounded-none md:justify-start md:bg-transparent"
      ref={headerRef}
    >
      <div className="md:bg-slate-950/50 md:backdrop-blur-xs px-6 py-8 md:px-16  border-slate-500  md:rounded-br-[50px] md:border-r-2 md:border-b-2">
        <h1 className="font-bold text-4xl select-none">Oscar</h1>
      </div>

      <div className="flex justify-center items-center gap-5 relative bg-slate-950/50 backdrop-blur-xs w-fit border-2 border-slate-500 font-semibold px-7 py-2 rounded-full">
        <Navbar isDisplayed={isNavOpen} animation={navAnimation} />

        <button
          onClick={toggleMenu}
          className="text-2xl text-cyan-100 cursor-pointer transition-colors duration-200 hover:text-cyan-400 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

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
