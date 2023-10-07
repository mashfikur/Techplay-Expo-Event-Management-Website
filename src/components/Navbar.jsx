import { Link, NavLink } from "react-router-dom";
import navIcon from "../assets/images/navicon.png";
import userLogo from "../assets/images/user.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/manage-events">Manage Events</NavLink>
      </li>
    </>
  );

  return (
    <div className="my-4 container mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
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
          <ul className="menu menu-horizontal px-1 font-bold space-x-4">{navLinks}</ul>
        </div>
        <div className="navbar-end w-[30%] space-x-5 lg:w-[50%] ">
          <p className=" hidden md:block  px-4 bg-black text-white font-semibold  py-1 rounded-full">
            jane
          </p>

          <div className=" md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userLogo} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 flex flex-col items-center gap-4"
            >
              <li>
                <span className="text-xl font-semibold">jane</span>
              </li>
              <li>
                <Link className="  md:block" to="/login">
                  <button className="btn btn-sm w-full btn-neutral">
                    logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <img className="w-10 hidden md:block " src={userLogo} alt="" />

          <Link className="hidden md:block" to="/login">
            <button className="btn  round btn-neutral ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
