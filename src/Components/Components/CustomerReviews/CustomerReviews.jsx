import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import ReactStars from "react-stars";
import "../../Styles/CustomerReviews.css";
const CustomerReviews = () => {
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
    <div className="bg-gray-100 mx-auto sm:my-20 my-10 w-11/12 py-20 text-center customer">
      <Slider {...settings}>
        <div className="flex justify-center mx-auto items-center">
          <h1 className="text-2xl font-bold">What Our Customer Say</h1>
          <div>
            <FontAwesomeIcon
              className="bg-[#73841B] my-4 p-4 text-white text-2xl rounded "
              icon={faQuoteRight}
            />
          </div>
          <h1 style={{ letterSpacing: "1px" }} className="text-xl font-bold">
            "For customer support"
          </h1>
          <p className="sm:w-2/3 text-center mx-auto">
            I couldn't be happier with the level of professionalism and
            expertise displayed by the team. They went above and beyond to
            ensure my needs were met, and the end result exceeded my
            expectations.
          </p>
          <h1 className="text-lg font-bold text-center mx-auto">By Sarah</h1>
          <div className=" flex justify-center">
            <ReactStars count={5} size={24} color2={"#ffd700"} value={3} />
          </div>
        </div>
        <div className="flex justify-center mx-auto items-center">
          <h1 className="text-2xl font-bold">What Our Customer Say</h1>
          <div>
            <FontAwesomeIcon
              className="bg-[#73841B] my-4 p-4 text-white text-2xl rounded "
              icon={faQuoteRight}
            />
          </div>
          <h1 style={{ letterSpacing: "1px" }} className="text-xl font-bold">
            "For customer support"
          </h1>
          <p className="sm:w-2/3 text-center mx-auto">
            The customer service provided by this company is outstanding. From
            the initial inquiry to the final delivery, every interaction was
            pleasant and efficient. I highly recommend their services.
          </p>
          <h1 className="text-lg font-bold text-center mx-auto">By John</h1>
          <div className=" flex justify-center">
            <ReactStars count={5} size={24} color2={"#ffd700"} value={3} />
          </div>
        </div>
        <div className="flex justify-center mx-auto items-center">
          <h1 className="text-2xl font-bold">What Our Customer Say</h1>
          <div>
            <FontAwesomeIcon
              className="bg-[#73841B] my-4 p-4 text-white text-2xl rounded "
              icon={faQuoteRight}
            />
          </div>
          <h1 style={{ letterSpacing: "1px" }} className="text-xl font-bold">
            "For customer support"
          </h1>
          <p className="sm:w-2/3 text-center mx-auto">
            As a repeat customer, I can confidently say that this company
            consistently delivers top-notch quality products. Their attention to
            detail and commitment to customer satisfaction make them my go-to
            choice for all my needs
          </p>
          <h1 className="text-lg font-bold text-center mx-auto">By Emily</h1>
          <div className=" flex justify-center">
            <ReactStars count={5} size={24} color2={"#ffd700"} value={3} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomerReviews;
