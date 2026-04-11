import CircleIcon from "../CircleIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  const contact = [
    {
      icon: faGithub,
      name: "GitHub",
      link: "https://github.com/oscardevv",
    },
  ];

  return (
    <section className="px-16 py-30 border-t-2 border-slate-500" id="contact">
      <div className="flex flex-col items-center justify-center gap-10 -mx-16 min-h-100 h-[80vh] text-center text-slate-950 bg-radial from-cyan-200 to-sky-500 rounded-4xl brightness-80 sm:w-full sm:m-0">
        <h3 className="text-5xl font-bold">Vamos criar algo juntos?</h3>

        <p className="text-xl font-semibold">
          Fale comigo em uma destas maneiras disponíveis:
        </p>

        <div className="flex flex-wrap gap-5">
          {contact.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between size-22.5"
            >
              <CircleIcon
                icon={item.icon}
                to={item.link}
                classes="scale-125"
                target="_blank"
                aria-label="Ir para forma de contato"
              />
              {item.name && (
                <h4 className="mt-3 text-lg font-semibold">{item.name}</h4>
              )}
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold">
          Novas formas ainda para chegarem.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
