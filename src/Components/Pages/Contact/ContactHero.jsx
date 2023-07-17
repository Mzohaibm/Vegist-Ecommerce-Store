import { Link } from "react-router-dom";
import hero_banner from "../../../assets/Contact/hero_banner.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const ContactHero = () => {
  return (
    <div
      className=" py-28 mx-auto text-center bg-center bg-cover bg-no-repeat"
      style={{ background: `url(${hero_banner})` }}
    >
      <h1 className="md:text-6xl text-4xl font-medium ">Contact Us</h1>
      <div className="pt-4">
        <Link to="/" className="hover:text-[#73841B]">
          Home{" "}
        </Link>
        <FontAwesomeIcon
          className="text-xl h-4 w-2 px-2"
          icon={faGreaterThan}
        />
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default ContactHero;
