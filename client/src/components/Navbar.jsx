import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex p-5 gap-10 items-center justify-end bg-red-400">
        <li>
          <LanguageSelector />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
