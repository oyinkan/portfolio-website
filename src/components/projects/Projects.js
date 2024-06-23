import "./Projects.css";

const projectLists = [
  {
    title: "VPay",
    link: "https://vpay.africa",
    description:
      "VPay empowers retail and web business to accept and instantly confi...",
  },
  {
    title: "Settl",
    link: "https://settl.me",
    description: "Settl",
  },
  {
    title: "Naira",
    link: "https://naira.com",
    description: "Naira Money",
  },
  {
    title: "Adroit",
    link: "https://adroitmetering.com",
    description: "Metering is the heart of the utility business",
  },
  {
    title: "Call A Doc",
    link: "https://caladoc.ng",
    description:
      "A platform that connects all the facets of the medical market throu...",
  },
  {
    title: "PERL",
    link: "https://perlnigeria.net",
    description:
      "The Partnership to Engage, Reform and Learn (PERL) supports how go...",
  },
  {
    title: "Octa",
    link: "https://octa.ng",
    description: "A fast-growing savings and investment community.",
  },
  {
    title: "Medfit",
    link: "https://medfit.com.ng/",
    description: "Medfit",
  },
  {
    title: "Incollab Studio",
    link: "https://incollabstudio.com/",
    description:
      "A website used to easily track progress and approve project stages.",
  },
];

function Projects() {
  return (
    <section id="projects">
      {projectLists.map((proj) => (
        <a href={proj.link} target="_blank">
          <article>
            <div>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
            </div>
          </article>
        </a>
      ))}
    </section>
  );
}

export default Projects;
