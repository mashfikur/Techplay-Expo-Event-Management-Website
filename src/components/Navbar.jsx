import { Link, NavLink } from "react-router-dom";
import navIcon from "../assets/images/navicon.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/carrer">carrer</NavLink>
      </li>
      <li>
        <NavLink to="/carrer">route 2</NavLink>
      </li>
    </>
  );

  return (
    <div className="my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start w-[70%] lg:w-[50%] ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className=" w-[15%] md:w-[7%]" src={navIcon} alt="" />
            <h3 className="font-semibold text-xl md:text-3xl">TechPlay Expo</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end w-[30%] lg:w-[50%] ">
          <Link to="/login">
            {" "}
            <button className="btn btn-neutral">Login</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;