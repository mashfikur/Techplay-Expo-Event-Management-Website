import { BsArrowUpLeft} from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className=" p-4  flex flex-col text-center items-center justify-center min-h-screen xl:min-h-[80vh] ">
        <h3 className="uppercase font-medium text-xl">oops ! page not found</h3>
        <h1 className="font-bold text-[10rem] -my-10 flex -space-x-6 ">
          <span className="">4</span>
          <span className="text-yellow-500">0</span>
          <span className="">4</span>
        </h1>
        <p className="uppercase font-medium text-xl">
          we are sorry , but the page you requested was not found
        </p>

        <div className="mt-6">
          <Link to="/">
            <button className="btn btn-neutral flex items-center ">
              {" "}
              <BsArrowUpLeft className="text-xl"></BsArrowUpLeft> Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
