const Banner = () => {
  return (
    <div>
      <div className="banner-img">
        <div className="text-center p-4 lg:p-0 banner-overlay py-20 lg:py-36 text-white">
          <h3 className="font-bold text-xl lg:text-3xl pb-10">
            Welcome to <br />{" "}
            <span className=" text-5xl lg:text-7xl "> TechPlay Expo</span>{" "}
          </h3>
          <h3 className="font-semibold  ">
            Where events become Fun and organised.
          </h3>
          <p className="font-semibold ">
            Discover the Ultimate Fusion of Technology and Entertainment with
            Us.
          </p>
          <p className="font-semibold text-xl mt-8 lg:my-7 lg:text-2xl bg-gradient-to-r from-[#ff00d4] to-[#00ddff]  px-4 py-2 rounded-full ">
            Get Ready to Level Up Your Event Experience !{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
