import { useEffect } from "react";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
    </div>
  );
};

export default Home;
