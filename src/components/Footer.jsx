import { Link } from "react-router-dom";
import navIcon from "../assets/images/navicon.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <footer data-aos="fade-down" className="footer p-10 text-white">
          <aside className="">
            <Link to="/">
              <p className="font-bold flex gap-2 text-xl md:text-3xl">
                <img className="w-[2rem]" src={navIcon} alt="navicon" />
                TechPlay Expo
              </p>
            </Link>
            <p className="text-gray-400">
              Trusted Provider for a Mesmorizing Event
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
