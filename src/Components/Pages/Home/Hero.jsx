import Slider from "react-slick";
import HeroData from "./HeroData";
import bg1 from "../../../assets/Home/hero_right1.webp";
import bg2 from "../../../assets/Home/hero_right2.jpg";
import "../../Styles/Home.css";
import { Link } from "react-router-dom";
const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: "linear",
  };

  return (
    <div className="mx-auto w-11/12 my-5 lg:flex home_hero">
      <div className="lg:w-2/3 w-full mr-4 hero_inner">
        <Slider {...settings}>
          {HeroData.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="py-48 h-72 flex items-center"
                  style={{
                    backgroundImage: `url(${item.bg_img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-1/2 ml-4">
                    <h3 className="font-medium lg:text-2xl text-xl text-[#73841B]">
                      {item.subHeading}
                    </h3>
                    <h1 className="font-medium mt-4 mb-6 lg:text-6xl text-4xl">
                      {item.heading}
                    </h1>
                    <Link
                      to="/shop"
                      className="bg-[#73841B] text-white hover:bg-black lg:px-9 lg:py-4 px-5 rounded-full py-2"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="lg:w-1/3 w-full lg:block md:flex h-1/2 lg:mt-0 mt-4 ">
        <div
          className="p-4 h-44 flex items-center mb-0 lg:w-full md:w-1/2 w-full md:mt-0 mt-4 lg:mr-0 md:mr-2"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="font-medium">Fresh VegeTable</h1>
            <h1 className="text-2xl font-bold">Vege chili</h1>
            <p className="text-xl">start from $9</p>
            <button className="py-3 text-[#73841B] font-medium">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
        <div
          className="p-4 lg:h-48 h-44 lg:mt-4 flex items-center lg:w-full md:w-1/2 w-full lg:ml-0 md:mt-0 mt-4 md:ml-2"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="text-white font-medium">Fresh VegeTable</h1>
            <h1 className="text-white text-2xl font-bold">Vege chili</h1>
            <p className="text-white text-xl">start from $9</p>
            <button className="py-3 text-[#73841B] font-medium">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
