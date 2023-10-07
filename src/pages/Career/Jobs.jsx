import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { BsSearch } from "react-icons/bs";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [searchText, setSearchText] = useState(null);

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
    console.log(text);
    setSearchText(text);
    console.log(allJobs);

    const finded = allJobs.filter((job) =>
      job.job_title.toLowerCase().includes(searchText)
    );
    console.log(finded);

    if (!searchText) {
      setDisplayJobs(allJobs);
      return;
    }

    if (finded) {
      setDisplayJobs(finded);
    } else {
      setDisplayJobs(allJobs);
    }
  };

  return (
    <div>
      <div className=" min-h-screen container mx-auto">
        <h3 className="text-5xl text-transparent drop-shadow-2xl text-center bg-clip-text bg-gradient-to-r from-[#ff00d4] to-[#00ddff]  font-bold">
          Find Your Next Oppurtunity
        </h3>

        <div className="flex flex-col items-center my-6 ">
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

        <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12  ">
          {displayJobs.length>0 ? (
            displayJobs.map((job) => <JobCard key={job.id} job={job}></JobCard>)
          ) : (
            <>
              <h3 className="text-6xl flex text-center  text-gray-500 font-bold">
                Nothing found based on your search
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
