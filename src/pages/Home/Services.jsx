import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services,setServices]=useState([])

    useEffect(() => {
        fetch("/services.json")
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[])

  return (
    <div className="mt-12  container mx-auto">
      <h3 className="text-center font-bold drop-shadow-2xl text-5xl">Our Services  </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 p-6  xl:grid-cols-3 gap-10 my-16">
            {
                services.map(service=><Service key={service.id} service={service} ></Service>)
            }
        </div>

    </div>
  );
};

export default Services;
