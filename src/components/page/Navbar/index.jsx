import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import OtimizationContext from "../../parts/OtimizationProvider/OtimizationContext";

function Navbar({ isDisplayed, animation }) {
  const navItems = [
    {
      name: "Sobre mim",
      to: "#about",
    },
    {
      name: "Habilidades",
      to: "#habilities",
    },
    {
      name: "Projetos",
      to: "#projects",
    },
    {
      name: "Contato",
      to: "#contact",
    },
  ];
  const navbarRef = useRef(null);

  const { slowMode } = useContext(OtimizationContext);

  useEffect(() => {
    if (!slowMode && animation) {
      gsap.fromTo(
        navbarRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
      );
    }
  }, [slowMode, animation]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-21.25 right-0 px-15 py-10 text-xl bg-slate-950 border-2 border-slate-500 rounded-b-xl md:top-0 md:left-0 md:block md:relative md:bg-transparent md:border-none md:rounded-none md:px-0 md:py-0 md:text-base md:translate-0 ${isDisplayed ? "block" : "hidden"}`}
    >
      <ul className="flex flex-col items-center justify-center gap-5 md:flex-row">
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer select-none text-cyan-100 transition-colors duration-200 hover:text-cyan-400"
            >
              <a href={item.to}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
