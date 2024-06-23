import "./Header.css";
function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <img src="/logo.svg" alt="portfolio logo" />
        </a>
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <section className="name-section">
        <p>Hi,I’m</p>
        <h1>Sakirat Usman.</h1>
        <p className="profession">Software Engineer | Data Analyst</p>
      </section>
      <section className="social-links"></section>
    </header>
  );
}

export default Header;
