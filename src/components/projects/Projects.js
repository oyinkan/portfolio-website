import "./Projects.css";
import adroit from "../../assets/images/adroit.png";
import caladoc from "../../assets/images/caladoc.png";
import incollab from "../../assets/images/incollab.png";
import octa from "../../assets/images/octa.png";
import medfit from "../../assets/images/medfit.png";
import perl from "../../assets/images/perl.png";
import settl from "../../assets/images/settl.png";
import vpay from "../../assets/images/vpay.png";
import { TbWorld } from "react-icons/tb";

const projectLists = [
  {
    title: "VPay",
    link: "https://vpay.africa",
    description:
      "VPay empowers retail and web business to accept and instantly confi...",
    image: vpay,
  },
  {
    title: "Settl",
    link: "https://settl.me",
    description: "Settl",
    image: settl,
  },
  {
    title: "Naira",
    link: "https://naira.com",
    description: "Naira Money",
    image: "",
  },
  {
    title: "Adroit",
    link: "https://adroitmetering.com",
    description: "Metering is the heart of the utility business",
    image: adroit,
  },
  {
    title: "Call A Doc",
    link: "https://caladoc.ng",
    description:
      "A platform that connects all the facets of the medical market throu...",
    image: caladoc,
  },
  {
    title: "PERL",
    link: "https://perlnigeria.net",
    description:
      "The Partnership to Engage, Reform and Learn (PERL) supports how go...",
    image: perl,
  },
  {
    title: "Octa",
    link: "https://octa.ng",
    description: "A fast-growing savings and investment community.",
    image: octa,
  },
  {
    title: "Medfit",
    link: "https://medfit.com.ng/",
    description: "Medfit",
    image: medfit,
  },
  {
    title: "Incollab Studio",
    link: "https://incollabstudio.com/",
    description:
      "A website used to easily track progress and approve project stages.",
    image: incollab,
  },
];

function Projects() {
  return (
    <section id="projects">
      <h3>Featured Works</h3>
      <div>
        {projectLists.map((proj, key) => (
          <article key={key}>
            <div
              className="card-header"
              style={{
                background: `url(${proj.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="card-body">
              <div>
                <h4>{proj.title}</h4>
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <TbWorld />
                </a>
              </div>
              <p>{proj.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
