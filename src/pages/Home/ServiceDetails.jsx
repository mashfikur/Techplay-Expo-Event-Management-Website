import { useEffect } from "react";
import { BsArrowLeft, BsHeartFill } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { ID } = useParams();

  const allData = useLoaderData();

  const selected = allData.find((chosen) => chosen.id === parseInt(ID));

  const {
    service_name,
    service_details,
    price,
    service_image,
    service_features,
  } = selected;

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row px-2 xl:px-0 gap-5 justify-between items-center">
          <div>
            <Link to="/">
              <button className="btn btn-neutral">
                {" "}
                <BsArrowLeft></BsArrowLeft> Go back
              </button>
            </Link>
          </div>
          <div className="">
            <h3 className="text-center text-5xl font-bold drop-shadow-2xl ">
              {service_name}{" "}
            </h3>
          </div>
          <div>
            <p className="font-bold  btn btn-outline btn-neutral rounded-full">
              Starts Form : ${price}{" "}
            </p>
          </div>
        </div>
        <div className="my-12">
          <img
            className="w-[40%] mx-auto rounded-lg shadow-2xl "
            src={service_image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row p-4">
          <div className="flex-1">
            <p className="font-medium mb-4 text-gray-400 text-center text-xl lg:text-start">
              {" "}
              {service_details}{" "}
            </p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold"> Features We Provide </h3>
            <ul className="font-semibold mt-5 grid gap-5 grid-cols-2">
              {service_features.map((feature, idx) => (
                <li
                  className=" px-4 py-3 rounded-lg text-white font-semibold bg-neutral"
                  key={idx}
                >
                  {" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-5 flex flex-col items-center">
          <button className="btn btn-secondary border-none bg-gradient-to-r from-[#ff00d4] to-[#00ddff] text-black font-bold ">
            <BsHeartFill></BsHeartFill> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
