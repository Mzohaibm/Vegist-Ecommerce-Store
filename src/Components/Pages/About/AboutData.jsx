import person1 from "../../../assets/About/people1.webp";
import person2 from "../../../assets/About/people2.webp";
import arrow from "../../../assets/About/arrow.png";
import { faPercent,faArrowRotateLeft,faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutData = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 place-items-center md:my-20 my-12">
        <div>
          <img
            className="hover:scale-95 hover:brightness-75 duration-300 ease-in-out"
            src={person1}
            alt="person1_photographer"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-500">Photographer</h3>
          <h1 className="text-4xl font-bold py-4 ">Justin Lisiakir</h1>
          <div className="border-b-[2px] border-[#73841B] w-1/3 mb-8"></div>
          <p>
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss. We exist to give you the confidence to
            be whoever you want to be.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 place-items-center md:my-20 my-12">
        <div>
          <h3 className="text-xl font-medium text-gray-500">Sales agent</h3>
          <h1 className="text-4xl font-bold py-4 ">Alex Barnder</h1>
          <div className="border-b-[2px] border-[#73841B] w-1/3 mb-8"></div>
          <p>
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss. We exist to give you the confidence to
            be whoever you want to be.
          </p>
        </div>
        <div>
          <img
            className="hover:scale-95 hover:brightness-75 duration-300 ease-in-out"
            src={person2}
            alt="person1_photographer"
          />
        </div>
      </div>
      <div className="shopWithUs_g">
        <h3 className="text-center text-xl font-medium text-gray-500">
          Why Choose Us
        </h3>
        <h1 className="text-center text-4xl font-bold py-4 ">
          Special Care For Our Every Food & Vegetable Lover
        </h1>
        <div className="border-b-[2px] border-[#73841B] w-1/3 mx-auto mb-8 text-center"></div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-28 md:gap-20 gap-12">
          <div className="shadow-xl hover:shadow-2xl py-8">
            <FontAwesomeIcon
              className="text-2xl text-center mx-auto flex text-[#73841B]"
              icon={faPercent}
            />
            <h1 className="text-center text-3xl font-bold py-4 ">
              Discount Options
            </h1>
            <p className="text-center tex-xl font-medium">
              Discount Opportunities for Great Savings.
            </p>
            <img className="mx-auto my-3" src={arrow} alt="arrow_pic" />
          </div>
          <div className="shadow-xl hover:shadow-2xl py-8">
            <FontAwesomeIcon
              className="text-2xl text-center mx-auto flex text-[#73841B]"
              icon={faArrowRotateLeft}
            />
            <h1 className="text-center text-3xl font-bold py-4 ">
              Best Return Policy
            </h1>
            <p className="text-center tex-xl font-medium">
              Excellent Return Policy for Customer Satisfaction.
            </p>
            <img className="mx-auto my-3" src={arrow} alt="arrow_pic" />
          </div>
          <div className="shadow-xl hover:shadow-2xl py-8">
            <FontAwesomeIcon
              className="text-2xl text-center mx-auto flex text-[#73841B]"
              icon={faPhone}
            />
            <h1 className="text-center text-3xl font-bold py-4 ">
              Online Support{" "}
            </h1>
            <p className="text-center tex-xl font-medium">
              Convenient Online Assistance for Your Convenience.
            </p>
            <img className="mx-auto my-3" src={arrow} alt="arrow_pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
