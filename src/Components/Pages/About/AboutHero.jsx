
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/About.css";
const AboutHero = () => {
  return (
    <div className="about_hero mx-auto text-center py-28">
      <h1 className="md:text-6xl text-4xl font-medium ">About Us</h1>
      <div className="pt-4">
        <Link to="/" className="hover:text-[#73841B]">
          Home
        </Link>
        <FontAwesomeIcon
          className="text-xl h-4 w-2 px-2"
          icon={faGreaterThan}
        />
        <span>About Us</span>
      </div>
    </div>
  );
};

export default AboutHero;
