import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonGroup } from "../Button";
import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import OtimizationContext from "../OtimizationProvider/OtimizationContext";

function HeroGlass() {
  const heroGlassRef = useRef(null);
  const { slowMode } = useContext(OtimizationContext);

  useEffect(() => {
    if (!slowMode) {
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
    }
  }, [slowMode]);

  return (
    <div
      className="absolute top-[calc(50%)] left-[50%] z-30 w-full min-h-[167.5] h-fit px-10 py-20 text-center bg-slate-950/60 border-t-2 border-b-2 border-slate-500 rounded-4xl translate-[-50%] backdrop-blur-xs md:top-[50%] md:w-[75vw] md:border-2"
      ref={heroGlassRef}
    >
      <h2 className="mb-10 text-4xl font-heading">
        Criando interfaces únicas e modernas.
      </h2>

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
          <span className="ml-3 font-semibold">GitHub</span>
        </Button>
        <Button id="button-gsap-2" type="link" variant="light" href="#projects">
          <FontAwesomeIcon icon={faRocket} className="text-2xl" />
          <span className="ml-3 font-semibold">Projetos</span>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default HeroGlass;
