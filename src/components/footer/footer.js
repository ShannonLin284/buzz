import "./footer.css";
import buzzLogo from "../../assets/buzz-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-logo">
          <img src={buzzLogo} alt="Buzz" />
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href="mailto:mc3237@cornell.edu">mc3237@cornell.edu</a>
        </div>
      </div>
    </footer>
  );
}
