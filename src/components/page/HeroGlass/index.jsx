import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonGroup } from "../../parts/Button";

function HeroGlass() {
  return (
    <div className="absolute left-[50%] top-[50%] translate-[-50%] w-[75vw] min-h-[167.5] h-fit text-center px-10 py-20 bg-slate-950/60 border-2 border-slate-500 rounded-4xl backdrop-blur-xs">
      <h1 className="text-4xl font-semibold mb-10">
        Criando interfaces únicas e modernas.
      </h1>

      <p className="mb-10 text-xl">
        Aprendendo, construindo e evoluindo a cada projeto.
      </p>

      <ButtonGroup>
        <Button type="link" variant="light" target="_blank" href="https://github.com/OscarDevv">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          <span className="font-semibold ml-3">GitHub</span>
        </Button>
        <Button type="link" variant="light" href="#projects">
          <FontAwesomeIcon icon={faRocket} className="text-2xl" />
          <span className="font-semibold ml-3">Projetos</span>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default HeroGlass;
