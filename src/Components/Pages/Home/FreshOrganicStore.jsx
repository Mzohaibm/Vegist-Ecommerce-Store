import { Link } from "react-router-dom";
import fresh_organic from "../../../assets/Home/freshOrganic_bg.webp";
const FreshOrganicStore = () => {
  return (
    <div className="mx-auto w-11/12 grid grid-cols-2 gap-4 place-items-center">
      <div>
        <img src={fresh_organic} alt="FreshOrganicStore" />
      </div>
      <div>
        <h1 className="text-4xl font-bold py-4">FRESH AND DELICIOUS</h1>
        <h1 className="text-6xl font-bold py-4">
          FRESH ORGANIC <br />{" "}
          <span className="text-6xl text-gray-500">grocery store</span>{" "}
        </h1>
        <p className="font-medium py-8 text-xl">
          Experience a culinary adventure at our fresh and delicious grocery
          store, where freshness and flavor take center stage. Our commitment to
          providing only the finest quality products is evident in every bite.
          From farm-fresh organic produce to delectable gourmet treats, we offer
          a wide range of options to satisfy your cravings and nourish your body
        </p>
        <Link
          to="/shop"
          className="bg-[#73841B] text-white hover:bg-black lg:px-9 lg:py-4 px-5 rounded-full py-2"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default FreshOrganicStore;
