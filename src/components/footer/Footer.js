import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} - Sakirat Usman</p>
    </footer>
  );
}

export default Footer;
