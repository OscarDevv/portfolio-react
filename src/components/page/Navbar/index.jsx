import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar({ isDisplayed, animation }) {
  const navItems = [
    {
      name: "Sobre",
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

  useEffect(() => {
    if (animation) {
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
  }, [animation]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-21.25 right-0 bg-slate-950 py-10 px-15 text-xl rounded-b-xl border-slate-500 border-2 md:relative md:translate-0 md:bg-transparent md:py-0 md:px-0 md:text-base md:rounded-none md:border-none md:block md:top-0 md:left-0 ${isDisplayed ? "block" : "hidden"}`}
    >
      <ul className="flex justify-center items-center gap-5 flex-col md:flex-row">
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer select-none transition-colors duration-200 text-cyan-100 hover:text-cyan-400"
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
