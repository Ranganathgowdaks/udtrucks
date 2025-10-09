import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Daily Production Monitor. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a> | <a href="#about">About</a> |{" "}
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
