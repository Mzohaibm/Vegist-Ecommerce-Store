import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faDollar,
  faHeadphones,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FreeReturnQuality = () => {
  return (
    <div className="mx-auto my-8 w-11/12 md:flex  justify-between">
      <div className="md:w-1/4 w-full py-4 border-[0.5px] border-dotted border-gray-400 flex justify-center sm:text-center text-left items-center">
        <div className="mr-4">
          <FontAwesomeIcon
            className="text-[#73841B] text-3xl rotate"
            icon={faTruck}
          />
        </div>
        <div>
          <h1 className="text-xl font-medium">Free delivery</h1>
          <p className="text-gray-500">Orders from all of them</p>
        </div>
      </div>
      <div className="md:w-1/4 w-full py-4 border-[0.5px] border-dotted border-gray-400 flex justify-center sm:text-center text-left items-center">
        <div className="mr-4">
          <FontAwesomeIcon
            className="text-[#73841B] text-3xl rotate"
            icon={faDollar}
          />
        </div>
        <div>
          <h1 className="text-xl font-medium">Return & refund</h1>
          <p className="text-gray-500">Money back guarantee</p>
        </div>
      </div>
      <div className="md:w-1/4 w-full py-4 border-[0.5px] border-dotted border-gray-400 flex justify-center sm:text-center text-left items-center">
        <div className="mr-4">
          <FontAwesomeIcon
            className="text-[#73841B] text-3xl rotate"
            icon={faHeadphones}
          />
        </div>
        <div>
          <h1 className="text-xl font-medium">Quality support</h1>
          <p className="text-gray-500">Alway online 24/7</p>
        </div>
      </div>
      <div className="md:w-1/4 w-full py-4 border-[0.5px] border-dotted border-gray-400 flex justify-center sm:text-center text-left items-center">
        <div className="mr-4">
          <FontAwesomeIcon
            className="text-[#73841B] text-3xl rotate"
            icon={faEnvelope}
          />
        </div>
        <div>
          <h1 className="text-xl font-medium">Join newslleter</h1>
          <p className="text-gray-500">20% off by subscribing</p>
        </div>
      </div>
    </div>
  );
};

export default FreeReturnQuality;





