import Heading from "../Heading"
import Project from "../Project"

function ProjectsSection() {
  const projectsList = [
    {
      img: "/projects/no_image.png",
      name: "Projeto 1",
      tools: ["HTML", "CSS", "JS"],
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequuntur provident voluptatem adipisci minus dignissimos ipsa. Voluptate veniam laboriosam suscipit ipsam excepturi voluptatem, culpa quod quo alias, quas, quae nihil?",
      links: ["https://github.com/OscarDevv/portfolio-react", "https://oscardevv.vercel.app"]
    },
    {
      img: "/projects/no_image.png",
      name: "Projeto 2",
      tools: ["HTML", "CSS", "JS"],
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequuntur provident voluptatem adipisci minus dignissimos ipsa. Voluptate veniam laboriosam suscipit ipsam excepturi voluptatem, culpa quod quo alias, quas, quae nihil?",
      links: ["https://github.com/OscarDevv/portfolio-react", "https://oscardevv.vercel.app"]
    },
    {
      img: "/projects/no_image.png",
      name: "Projeto 3",
      tools: ["HTML", "CSS", "JS"],
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequuntur provident voluptatem adipisci minus dignissimos ipsa. Voluptate veniam laboriosam suscipit ipsam excepturi voluptatem, culpa quod quo alias, quas, quae nihil?",
      links: ["https://github.com/OscarDevv/portfolio-react", "https://oscardevv.vercel.app"]
    }
  ]


  return (
    <section className="px-16 py-30 border-t-2 border-slate-500" id="projects">
      <Heading>Projetos</Heading>
      <div className="flex justify-between items-center flex-wrap gap-5">
        {projectsList.map((item, index) =>
          <Project data={item} key={index} />
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
