import ScrollAnimation from "react-animate-on-scroll";
import { GoArrowDownRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="resume">
        <a href="/">
          <img src="/logo.svg" alt="portfolio logo" />
        </a>
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <ScrollAnimation animateIn="slideInDown">
        <section className="name-section">
          <p>Hi,I’m</p>
          <h1>Sakirat Usman.</h1>
          <p className="profession">Software Engineer | Data Scientist</p>
        </section>
      </ScrollAnimation>
      <section className="social-links">
        <div>
          <a
            href="https://www.linkedin.com/in/sakirat-kehinde-usman-3a4600117/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/oyinkan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/13958137/shakirah"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://www.twitter.com/oyinkan93"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <GoArrowDownRight />
      </section>
    </header>
  );
}

export default Header;
