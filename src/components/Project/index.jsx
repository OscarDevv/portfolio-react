import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { ButtonGroup } from "../Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Project({ data, ...props }) {
  return (
    <article
      {...props}
      className="w-110 grow border-2 border-slate-500 rounded-xl overflow-hidden mt-8"
    >
      <img
        src={data.img}
        alt={`Imagem do projeto ${data.name}`}
        loading="lazy"
      />

      <div className="px-5 py-10">
        <h4 className="text-2xl font-bold font-heading mb-4">{data.name}</h4>

        {data.tools.map((tool, index) => (
          <span
            key={index}
            className="bg-cyan-700 text-white mr-2 py-1 px-3 rounded-full"
          >
            {tool}
          </span>
        ))}

        <p className="my-4">{data.description}</p>

        <ButtonGroup>
          <Button
            type="link"
            variant="light"
            target="_blank"
            href={data.links[0]}
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3" />
            Repositório
          </Button>
          <Button
            type="link"
            variant="light"
            target="_blank"
            href={data.links[1]}
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-3" />
            Web
          </Button>
        </ButtonGroup>
      </div>
    </article>
  );
}

export default Project;
