import "./Header.scss";
import { FaReact } from "react-icons/fa6";
import { BsSpotify } from "react-icons/bs";

function Header() {
  return (
    <header className="bg-stone-200 p-3 text-black text-5xl font-extralight  text-center rounded-b-lg shadow-md mb-5">
      <div className="header-style-row">
        <p>React.js</p>
        <FaReact className="logo-spin" />
        <p> Spotify Api</p>
        <BsSpotify className="logo-swing" />
      </div>
    </header>
  );
}

export default Header;
