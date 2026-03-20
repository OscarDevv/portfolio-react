import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonGroup } from "../../parts/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroGlass() {
  const heroGlassRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroGlassRef.current,
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back",
      },
    );

    gsap.fromTo(
      "#button-gsap-1, #button-gsap-2",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 0.7,
        ease: "back",
      },
    );
  }, []);

  return (
    <div
      className="absolute left-[50%] top-[50%] translate-[-50%] w-[75vw] min-h-[167.5] h-fit text-center px-10 py-20 bg-slate-950/60 border-2 border-slate-500 rounded-4xl backdrop-blur-xs"
      ref={heroGlassRef}
    >
      <h1 className="text-4xl font-semibold mb-10">
        Criando interfaces únicas e modernas.
      </h1>

      <p className="mb-10 text-xl">
        Aprendendo, construindo e evoluindo a cada projeto.
      </p>

      <ButtonGroup>
        <Button
          id="button-gsap-1"
          type="link"
          variant="light"
          target="_blank"
          href="https://github.com/OscarDevv"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          <span className="font-semibold ml-3">GitHub</span>
        </Button>
        <Button id="button-gsap-2" type="link" variant="light" href="#projects">
          <FontAwesomeIcon icon={faRocket} className="text-2xl" />
          <span className="font-semibold ml-3">Projetos</span>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default HeroGlass;
