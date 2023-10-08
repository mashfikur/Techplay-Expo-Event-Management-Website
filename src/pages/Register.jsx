import { useContext, useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Register = () => {
  const [showError, setShowError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const {
    createUser,
    setUser,
    setLoading,
    setNavName,
    googleUser,
    githubUser,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const imgLink = e.target.link.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reseting the error
    setShowError("");

    // password validation
    if (password.length < 6) {
      setShowError("Your Password should be more than 6 charectars");
      return;
    }

    //
    if (!/[A-Z]/.test(password)) {
      setShowError("Your password must have an uppercase charectar");
      return;
    }
    //
    if (!/[#&$@%^]/g.test(password)) {
      setShowError("Your password should contain a special charectar");
      return;
    }

    // creating user
    createUser(email, password)
      .then((result) => {
        setNavName(name);
        e.target.reset();

        // updating user info
        updateProfile(result.user, {
          displayName: name,
          photoURL: imgLink,
        })
          .then(() => {
            toast.success(" Created Account Successfully");
            setUser(result.user);
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    googleUser()
      .then(() => {
        toast.success("Created Account Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGithubLogin = () => {
    githubUser()
      .then(() => {
        toast.success("Logged in Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <div
        data-aos="fade-up"
        className="min-w-screen min-h-[90vh] flex items-center justify-center px-5 pb-12"
      >
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
                        placeholder="Name"
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
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-2">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type={`${showPass ? "text" : "password"}`}
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 z-10"
                        placeholder="Password"
                        required
                      />
                      <p
                        onClick={() => setShowPass(!showPass)}
                        className="-ml-8 text-xl mt-3 z-40 cursor-pointer"
                      >
                        {showPass ? (
                          <AiFillEyeInvisible></AiFillEyeInvisible>
                        ) : (
                          <AiFillEye></AiFillEye>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                {showError && (
                  <p className="font-bold text-red-600 ml-4 mb-3">
                    {showError}*
                  </p>
                )}
                <div className="flex flex-col items-center">
                  <button className="btn  bg-black text-white hover:bg-black w-full xl:w-1/3">
                    REGISTER NOW
                  </button>
                </div>
              </form>
              <div>
                <div className="divider">OR</div>

                <div className="flex flex-col items-center">
                  <button
                    onClick={handleGoogleSignUp}
                    className="btn w-full xl:w-1/3 rounded-full btn-outline mb-3 "
                  >
                    <FcGoogle className="text-xl"></FcGoogle> Sign Up with
                    Google
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="btn w-full xl:w-1/3 rounded-full btn-outline "
                  >
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
