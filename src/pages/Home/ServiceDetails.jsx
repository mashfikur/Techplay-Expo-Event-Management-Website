import { useEffect } from "react";
import { BsArrowLeft, BsHeartFill } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";

// swiper slider
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {  Navigation, Pagination } from "swiper/modules";

const ServiceDetails = () => {
  const { ID } = useParams();

  const allData = useLoaderData();

  const selected = allData.find((chosen) => chosen.id === parseInt(ID));

  const {
    service_name,
    service_details,
    price,
    service_features,
    more_images,
  } = selected;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="my-12 w-full">
          {/* <img
            className="w-[70%] mx-auto rounded-lg shadow-2xl "
            src={service_image}
            alt=""
          /> */}

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {more_images.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img className="w-[70%] mx-auto" src={slide} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col  items-center gap-8 lg:flex-col p-4">
          <div className="flex-1">
            <p className="font-medium mb-4 text-gray-400 text-center text-xl lg:text-start">
              {" "}
              {service_details}{" "}
            </p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold"> Features We Provide </h3>
            <ul className="font-semibold mt-5 grid gap-5 grid-cols-2 lg:grid-cols-1 ">
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
