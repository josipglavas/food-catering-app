import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logoMain from "../assets/logo-main.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-8 items-center bg-white">
        <Link to="/">
          <img
            src={logoMain}
            alt="Logo"
            className="h-20 object-contain ml-16 mr-4 m-1.5"
          />
        </Link>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <LanguageSelector />
        </li>
        <li className="ml-auto mr-12">
          <button className="text-nowrap text-white bg-slate-950 px-4 py-2 rounded-lg hover:scale-110">
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
