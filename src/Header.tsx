import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between align-left p-4 text-2xl text-white">
        <Link to="/">logo</Link>
        <nav className="flex justify-center gap-4">
          <Link
            className="ease rounded-md px-4 py-2 transition delay-100 hover:bg-white hover:text-slate-800"
            to="/about"
          >
            About
          </Link>
          <Link
            className="ease rounded-md px-4 py-2 transition delay-100 hover:bg-white hover:text-slate-800"
            to="/contact"
          >
            {" "}
            Contact
          </Link>
        </nav>

          <div className="flex justify-end">

          <a
            href="#"
            className="ease rounded-md px-4 py-2 transition delay-200 hover:bg-white hover:text-slate-800"
            target="_blank"
          >
            IG
          </a>
          <a
            href="#"
            className="ease rounded-md px-4 py-2 transition delay-200 hover:bg-white hover:text-slate-800"
            target="_blank"
          >
            FB
          </a>
          </div>
      </header>
    </>
  );
};

export default Header;
