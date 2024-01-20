const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-white flex h-16 w-full items-center justify-center bg-gray-800 px-4 md:px-6">
      <div className="flex gap-4">
        <a href="#">
          <span className="">Facebook</span>
        </a>
        <a href="#">
          <span className="">Twitter</span>
        </a>
        <a href="#">
          <span className="">Instagram</span>
        </a>
      </div>
      <p className="ml-auto text-xs text-white">
        © 2024 Acme Inc. All rights reserved.
      </p>
      <a
        className="ml-4 text-xs text-white underline underline-offset-2"
        href="#"
      >
        Privacy
      </a>
    </footer>
  );
};
export default Footer;
