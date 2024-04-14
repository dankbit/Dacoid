import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return <div className="h-screen text-center flex align-middle justify-center items-center">Please try in mobile phone screen or press "F12"<br/> we are still working for bigger screens</div>;
  }

  return (
    <div className="h-screen relative">
            <img src="https://i.ibb.co/YPsvKC8/Group-1-1.png" className="fixed" />

      <Carousel className="h-[100%]" autoplay="true" loop="true" autoplayDelay="2000">
        <div className="w-full h-full p-10 bg-white text-center md:w-2/4 flex flex-col justify-around">
          <img src="https://i.ibb.co/RcYxDr1/image-13.png" alt="" />
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-left text-black"
            >
              Track Your Goal
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-black text-left text-base"
            >
              Don’t worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </Typography>
          </div>
        </div>
        <div className="w-full h-full p-10 bg-white text-center md:w-2/4 flex flex-col justify-around">
          <img src="https://i.ibb.co/9vV9cHD/image-16.png" alt="" />
          <div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-left text-black"
            >
              Get Burn{" "}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-black text-left text-base"
            >
              Let’s keep burning to achieve your goals, it hurts only
              temporarily, if you give up now you will be in pain forever{" "}
            </Typography>
          </div>
        </div>
      </Carousel>
      <Link to="/signup">
      <img src="https://i.ibb.co/YPsvKC8/Group-1-1.png" className="fixed bottom-5 right-5" />
      </Link>
      <Link to="/signup">
      <p className="text-blue-300 underine fixed top-5 right-5">Skip</p>
      </Link>

    </div>
  );
}
