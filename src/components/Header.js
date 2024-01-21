import { Link } from "react-router-dom";
import { logo_images } from "../utils/contants";

const Header = () => {

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={logo_images} alt="Logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
