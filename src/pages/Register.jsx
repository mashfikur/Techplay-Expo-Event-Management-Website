import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <div className="min-w-screen min-h-[90vh] flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
          <div className="md:flex w-full">
            <div className="hidden  md:flex md:flex-col md:items-center md:justify-center w-1/2 bg-gradient-to-r from-[#ff00d4] to-[#00ddff] py-10 px-10">
              <img
                className="rounded-lg"
                src={"https://i.ibb.co/vmJK0xP/register-cover.png"}
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Please enter your information</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Full name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Photo URL
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="link"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Imgae Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="dane@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="*******"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button className="btn btn-neutral w-full xl:w-1/3">
                    REGISTER NOW
                  </button>
                </div>
              </form>
              <div>
                <div className="divider">OR</div>

                <div className="flex flex-col items-center">
                  <button className="btn w-full xl:w-1/3 rounded-full btn-outline mb-3 ">
                    <FcGoogle className="text-xl"></FcGoogle> Sign Up with
                    Google
                  </button>
                  <button className="btn w-full xl:w-1/3 rounded-full btn-outline ">
                    <BsGithub className="text-xl"></BsGithub>
                    Sign Up with Github
                  </button>
                </div>
              </div>
              <p className="text-base text-center font-semibold mt-4">
                Already have an account ? Please{" "}
                <Link className="font-bold text-blue-600 underline" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
