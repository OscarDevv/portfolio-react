import { useState, useRef } from "react";
import Heading from "../../parts/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
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
      className="flex justify-between px-16 py-30 border-t-2 border-slate-500"
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
              className="mr-1 py-3 px-5 bg-cyan-500 rounded-xl font-semibold cursor-pointer border-cyan-300 border-2 transition-colors duration-100 hover:bg-cyan-600 hover:text-neutral-200 hover:border-cyan-500"
            >
              {btn.name}
            </button>
          );
        })}

        <p className="mt-10 text-lg">{content}</p>
      </div>

      <img
        src="/foto-perfil.jpeg"
        alt=""
        className="rounded-[100px] w-100 cursor-pointer transition-all delay-100 duration-150 hover:rounded-none"
        onClick={() => setDialogState((prev) => !prev)}
      />

      <dialog
        ref={dialog}
        open={dialogState}
        className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-60"
      >
        <div className="relative flex justify-center items-center h-screen">
          <img src="/foto-perfil.jpeg" alt="" className="h-[90vh]" />

          <button
            ref={contractImageButton}
            onClick={() => setDialogState((prev) => !prev)}
            className="absolute right-20 top-20 text-white text-3xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinimize} />
          </button>
        </div>
      </dialog>
    </section>
  );
}

export default AboutMe;
