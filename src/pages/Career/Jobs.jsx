import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { BsSearch } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Jobs = () => {
  AOS.init();
  const [allJobs, setAllJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    fetch("/careers.json")
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setDisplayJobs(data);
      });
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;

    const finded = allJobs.filter((job) =>
      job.job_title.toLowerCase().includes(text)
    );

    if (text.length == 0) {
      setDisplayJobs(allJobs);
      return;
    }

    if (finded) {
      setDisplayJobs(finded);
    }
  };

  return (
    <div>
      <div className=" min-h-screen container mx-auto">
        <div>
          <h3
            data-aos="fade-up"
            className="text-5xl mt-6 text-transparent drop-shadow-2xl text-center bg-clip-text bg-gradient-to-r from-[#ff00d4] to-[#00ddff]  font-bold"
          >
            Find Your Next Oppurtunity
          </h3>
        </div>

        <div data-aos="fade-up" className="flex flex-col items-center my-6 ">
          <div className="flex items-center ">
            <BsSearch className="absolute ml-3 "></BsSearch>
            <input
              type="text"
              name="text"
              onChange={handleSearch}
              placeholder="Search job title ...."
              className="input px-12 input-bordered focus:outline-none w-full rounded-full "
            />
          </div>
        </div>

        {displayJobs.length ? (
          <>
            <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12  ">
              {displayJobs.map((job) => (
                <JobCard key={job.id} job={job}></JobCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-6xl flex text-center  text-gray-500 font-bold">
                Nothing found based on your search
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobs;
