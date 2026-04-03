function Habilities({ element }) {
  const habilities = [
    {
      icon: "/tools/html.svg",
      name: "HTML",
      content:
        "Em HTML, sei criar estrutura básica, tags semânticas, acessibilidade básica, SEO, formulários, tabelas, integração com CSS e JavaScript e uso de atributos globais.",
    },
    {
      icon: "/tools/css.svg",
      name: "CSS",
      content:
        "Em CSS, sei usar seletores básicos e alguns mais avançados, box model, flexbox, grid, pseudo-classes e pseudo-elementos, a maioria das propriedades mais utilizadas, animações e custom properties (variáveis).",
    },
    {
      icon: "/tools/js.svg",
      name: "JavaScript",
      content:
        "Em JavaScript, sei sua sintaxe básica, funções, métodos de arrays e objetos, destructuring e spread, DOM básico, ouvintes de eventos, import/export, assíncrono básico, classes, construtores, localStorage e alguns métodos HTTP básicos.",
    },
    {
      icon: "/tools/ts.svg",
      name: "TypeScript",
      content:
        "Em TypeScript, sei tipagem básica, arrays e objetos tipados, funções tipadas, union e intersection types, generics, Record e enums.",
    },
    {
      icon: "/tools/git.svg",
      name: "Git",
      content:
        "Em Git, sei comandos básicos, uso de branchs, repositórios remotos e visualização de histórico.",
    },
    {
      icon: "/tools/github.svg",
      name: "GitHub",
      content:
        "No GitHub, sei criar e editar repositórios, criar commits, usar branchs, colaborar em repositórios e documentar com README.",
    },
    {
      icon: "/tools/sass.svg",
      name: "SASS",
      content:
        "Em SASS, sei criar variáveis, mixins, funções, aninhamentos, importações, partials, extends, mapas, loops e condicionais.",
    },
    {
      icon: "/tools/tailwind-css.svg",
      name: "Tailwind CSS",
      content:
        "Em Tailwind CSS, sei usar classes utilitárias básicas, layouts com flexbox e grid, espaçamentos, uso de sua paleta de cores, responsividade, pseudo-classes, integrações com React e Vite, modo escuro, animações e transições e arbitrary values.",
    },
    {
      icon: "/tools/react.svg",
      name: "React",
      content:
        "Em React, sei criar e usar componentes, props, hooks básicos (useState, useRef, useEffect e useContext), eventos, renderizações condicionais, listas e keys e uso do Context API.",
    },
  ];

  return (
    <>
      {habilities.map((item, index) => (
        <div
          key={index}
          onClick={() => (element.current.innerText = item.content)}
          className="flex flex-col items-center justify-evenly size-45 cursor-pointer border-2 border-slate-500 rounded-xl transition-colors hover:bg-sky-900 hover:border-sky-500 md:size-50"
        >
          <img
            src={item.icon}
            alt={`Ícone da habilidade "${item.name}"`}
            width="96px"
            height="96px"
            loading="lazy"
            className="select-none"
          />
          <h4 className="text-2xl font-heading font-bold">{item.name}</h4>
        </div>
      ))}
    </>
  );
}

export default Habilities;
