import { useState, useRef } from "react";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";

function AboutMeSection() {
  const toggleButtons = [
    {
      name: "Quem sou eu",
      content:
        "Meu nome é Oscar, tenho 13 anos e venho estudando e praticando programação desde cedo. No momento, eu estou focando na área de desenvolvimento Front-End, mas depois gostaria de explorar o Back-End, me tornando assim um Full-Stack.",
    },
    {
      name: "Minha jornada",
      content:
        "Aos 12 anos, eu já sabia o básico de HTML, CSS e JavaScript legado, mas depois fui entendendo que hávia muito mais para aprender, e que o que eu já sabia era muito pouco, então comecei a estudar ferramentas novas e isso vem acontecendo até agora.",
    },
    {
      name: "Minha inspiração",
      content:
        "Eu sonho um dia criar ferramentas Open Source para ajudar vários devs pelo mundo, e minha inspiração atual é o Evan You (criador do VueJS e Vite, e também fundador da empresa VoidZero), adimiro ele por ter criado tantas ferramentas que mudaram o ecossistema Front-End, tudo isso sozinho.",
    },
  ];
  const [content, setContent] = useState(toggleButtons[0].content);

  function changeContent(newContent) {
    if (newContent !== content) {
      setContent(newContent);
    }
  }

  const dialog = useRef(null);
  const contractImageButton = useRef(null);
  const [dialogState, setDialogState] = useState(false);

  return (
    <section
      className="flex flex-col items-center gap-5 px-16 py-30 border-t-2 border-slate-500 md:items-start lg:flex-row lg:justify-between"
      id="about"
    >
      <div className="mr-10">
        <Heading classes="mb-10">Sobre mim</Heading>

        {toggleButtons.map((btn, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => changeContent(btn.content)}
              className="m-1 px-5 py-3 text-white font-semibold cursor-pointer bg-cyan-700 border-2 border-cyan-500 rounded-xl transition-colors duration-100 hover:bg-cyan-800 hover:border-cyan-500"
            >
              {btn.name}
            </button>
          );
        })}

        <p className="my-10 text-lg md:text-justify">{content}</p>
      </div>

      <img
        src="/foto-perfil.jpeg"
        alt="Foto de perfil do Oscar"
        className="w-100 cursor-pointer rounded-3xl transition-all delay-100 duration-150 hover:rounded-none md:rounded-[100px]"
        loading="lazy"
        onClick={() => setDialogState((prev) => !prev)}
      />

      <dialog
        ref={dialog}
        open={dialogState}
        className="fixed top-0 left-0 z-60 w-screen h-screen bg-black/50"
      >
        <div className="relative flex items-center justify-center h-screen">
          <img
            src="/foto-perfil.jpeg"
            alt="Foto de perfil do Oscar"
            className="h-[70vh] md:h-[90vh]"
            loading="lazy"
          />

          <button
            ref={contractImageButton}
            onClick={() => setDialogState((prev) => !prev)}
            className="absolute top-10 right-10 cursor-pointer text-3xl text-white"
          >
            <FontAwesomeIcon icon={faMinimize} />
          </button>
        </div>
      </dialog>
    </section>
  );
}

export default AboutMeSection;
