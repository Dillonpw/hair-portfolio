import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="align-left flex justify-between p-4 text-2xl text-black">
        <Link to="/">logo</Link>
        <nav className="flex justify-center gap-4 rounded-full bg-white px-8 py-2 shadow-[3px_7px_0px_0px_rgba(0,0,0)] hover:translate-y-1 hover:shadow-none">
          <Link
            className="rounded-full px-4 py-2 transition delay-100 ease-in-out hover:bg-black hover:text-white"
            to="/about"
          >
            About
          </Link>
          <Link
            className="rounded-full px-4 py-2 transition delay-100 ease-in-out hover:bg-black hover:text-white"
            to="/contact"
          >
            {" "}
            Contact
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-2">
          <a
            href="#"
            className="rounded-lg bg-white outline outline-2 px-4 py-2 transition delay-200 ease-linear shadow-[1px_5px_0px_2px_rgba(0,0,0)] hover:translate-y-1 hover:shadow-none"
            target="_blank"
          >
            IG
          </a>
          <a
            href="#"
            className="rounded-lg outline outline-2 bg-white px-4 py-2 transition delay-200 ease-linear shadow-[1px_5px_0px_2px_rgba(0,0,0)] hover:translate-y-1 hover:shadow-none"
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
