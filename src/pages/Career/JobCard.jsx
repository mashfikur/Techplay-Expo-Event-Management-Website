import PropTypes from "prop-types";
import { BsCheck } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const JobCard = ({ job }) => {
  return (
    <div>
      <div data-aos="fade-up" className="card h-[35rem] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-60" src={job.job_image} alt="job-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.job_title}</h2>
          <p className="font-bold">
            Details :{" "}
            <span className="font-medium text-gray-400">
              {" "}
              {job.job_details}{" "}
            </span>{" "}
          </p>
          <p className="font-bold">
            Experience :{" "}
            <span className="font-medium text-gray-400">
              {" "}
              {job.experience}{" "}
            </span>{" "}
          </p>
          <p className="font-bold">
            Location :{" "}
            <span className="font-medium text-gray-400">
              {" "}
              {job.job_location}{" "}
            </span>{" "}
          </p>

          <div className="card-actions">
            <button className="btn w-full btn-primary capitalize">
              <BsCheck className="text-2xl"></BsCheck>
              {"I'm"} Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
