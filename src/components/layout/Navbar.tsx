import Hamburger from "../ui/Hamburger";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-white via-white fixed w-full h-24">
      <nav className="h-16 flex items-center justify-between px-4 fixed w-full">
        <a className="font-bold">
          <strong className="text-blue-500">/</strong>Naviant
          <strong className="text-blue-500">.</strong>
        </a>
        <Hamburger />
      </nav>
    </div>
  );
}
