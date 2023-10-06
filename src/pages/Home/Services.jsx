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
    <div className="mt-8 container mx-auto">
      <h3 className="text-center font-bold text-3xl">Our Services : {services.length} </h3>

        <div className="grid grid-cols-3 gap-10">
            {
                services.map(service=><Service key={service.id} service={service} ></Service>)
            }
        </div>

    </div>
  );
};

export default Services;
