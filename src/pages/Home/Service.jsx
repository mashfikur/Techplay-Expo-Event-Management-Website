import PropTypes from "prop-types";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id, service_name, service_image, service_details, price } = service;
  return (
    <div>
      <div className="card hover:drop-shadow-2xl duration-300 h-[30rem] bg-base-100 shadow-xl">
        <figure>
          <img src={service_image} alt="Shoes" className="w-full  " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{service_name}</h2>
          <p className="font-medium text-gray-400">
            {service_details.split("").slice(0, 150)} ...
          </p>
          <div className="card-actions justify-between mt-4 items-center ">
            <Link to={`/service/${id}`}>
              <button className="btn  btn-primary border-none shadow-lg bg-gradient-to-r from-[#ff00d4] to-[#2bbdd4] font-bold">
                view details
                <BsArrowUpRight className="text-xl"></BsArrowUpRight>
              </button>
            </Link>

            <div>
              <p className="font-bold  ">
                Starting From : <span> $ {price} </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
