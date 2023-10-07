import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("/careers.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  return (
    <div>
      <div className="my-12 container mx-auto">
        <h3 className="text-5xl drop-shadow-2xl text-center font-bold">
          Find Your Next Oppurtunity
        </h3>
        <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12  ">
          {allJobs.map((job) => (
            <JobCard key={job.id} job={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
