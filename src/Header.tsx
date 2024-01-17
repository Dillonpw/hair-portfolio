import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b-4 border-white p-4 text-4xl text-white">
        <Link to="/">logo</Link>
        <nav className="flex gap-4">
          <Link
            className="rounded-md p-4 hover:bg-white hover:text-slate-800"
            to="/about"
          >
            About
          </Link>
          <Link
            className="rounded-md p-4 hover:bg-white hover:text-slate-800"
            to="/contact"
          >
            {" "}
            Contact
          </Link>
          <Link
            className="rounded-md p-4 hover:bg-white hover:text-slate-800"
            to="/gallery"
          >
            Gallery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
