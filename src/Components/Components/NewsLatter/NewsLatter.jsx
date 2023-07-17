import { Link } from "react-router-dom";
import "../../Styles/NewsLatter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const NewsLatter = () => {
  return (
    <div className="mx-auto lg:flex block w-11/12 my-20 text-center">
      <div className="news1 lg:w-2/3 w-full py-12">
        <h1 className="text-[#73841B]">Top testi pasta</h1>
        <h1
          style={{ letterSpacing: "0.6px" }}
          className="mb-4 mt-2 text-xl font-bold"
        >
          Served alongside fried egg and tomatoes
        </h1>
        <Link
          to="/shop"
          className="bg-[#73841B]  text-white hover:bg-black py-3 px-7 rounded-full"
        >
          Shop Now
        </Link>
      </div>
      <div className="news2 py-12 w-full lg:mt-0 mt-4 lg:ml-4 lg:w-1/3">
        <h1
          style={{ letterSpacing: "0.6px" }}
          className="mb-4 mt-2 text-xl font-bold"
        >
          Get the latest deals
        </h1>
        <div className="bg-white rounded-full w-2/3  mx-auto shadow-2xl">
          <form action="action.php">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 focus:outline-none rounded-full"
              required
            />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
