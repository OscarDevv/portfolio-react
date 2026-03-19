function Navbar() {
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

  return (
    <nav>
      <ul className="flex justify-center items-center gap-5">
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
