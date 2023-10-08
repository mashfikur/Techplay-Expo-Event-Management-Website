import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Login = () => {
  const { userSignIn, setLoading, googleUser, githubUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // singning in user
    userSignIn(email, password)
      .then(() => {
        toast.success("Logged In Successfully");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleUser()
      .then(() => {
        toast.success("Logged in Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGithubLogin = () => {
    githubUser()
      .then(() => {
        toast.success("Logged in Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="px-10  flex xl:flex-row items-center justify-center xl:justify-start gap-10 xl:gap-20">
        <div data-aos="fade-right" className="hidden xl:block">
          <img src="https://i.ibb.co/ZLpf2wT/login-cover.png" alt="" />
        </div>
        <div
          data-aos="fade-left"
          className="min-h-[80vh] py-10 flex flex-col justify-center "
        >
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00d4] to-[#00ddff] shadow-lg  -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">
                    Login to your account
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <form onSubmit={handleSubmit}>
                      <div className="relative mb-5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="relative mb-5">
                        <input
                          autoComplete="off"
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <button className="btn bg-black text-white hover:bg-black w-full">
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="flex flex-col gap-3  ">
                      <button
                        onClick={handleGoogleLogin}
                        className="btn  rounded-full"
                      >
                        <FcGoogle className="md:text-xl"></FcGoogle>
                        Sign in with Google
                      </button>
                      <button onClick={handleGithubLogin} className="btn  rounded-full">
                        <BsGithub className="md:text-xl"></BsGithub>
                        Sign in with Github
                      </button>
                      <p className="text-base text-center font-semibold mt-4">
                        New to this website ? Please{" "}
                        <Link
                          className="font-bold text-blue-600 underline"
                          to="/register"
                        >
                          Register
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
