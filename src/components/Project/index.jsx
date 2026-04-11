import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { ButtonGroup } from "../Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Project({ data, ...props }) {
  return (
    <article
      {...props}
      className="grow w-110 mt-8 overflow-hidden border-2 border-slate-500 rounded-xl"
    >
      <img
        src={data.img}
        alt={`Imagem do projeto ${data.name}`}
        loading="lazy"
      />

      <div className="px-5 py-10">
        <h4 className="mb-4 text-2xl font-heading font-bold">{data.name}</h4>

        {data.tools.map((tool, index) => (
          <span
            key={index}
            className="mr-2 px-3 py-1 text-white bg-cyan-700 rounded-full"
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
