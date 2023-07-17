import OurProductData from "../../Components/OurProductsData";
import "../../Styles/Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import cata1 from "../../../assets/NewProducts/Product5_1.jpg";
import cata2 from "../../../assets/NewProducts/Product2_3.jpg";
import cata3 from "../../../assets/NewProducts/Product2_1.webp";
import cata4 from "../../../assets/NewProducts/Product6_3.jpg";
import { Link } from "react-router-dom";
import FreeReturnQuality from "../../Components/FreeReturnQuality/FreeReturnQuality";
const categoriesImages = [cata1, cata2, cata3, cata4];
const Categories = () => {
  const GetCategories = Object.keys(OurProductData);
  const getLinkPaths = (category) => {
    if (category === "NewProduct") {
      return "/shop/category/new-product";
    } else if (category === "SpecialProduct") {
      return "/shop/category/special-product";
    } else if (category === "BestSeller") {
      return "/shop/category/best-seller-product";
    } else if (category === "FeaturedProduct") {
      return "/shop/category/featured-product";
    } else {
      return "/shop/category";
    }
  };
  return (
    <div className="mx-auto ">
      <div className="cata_hero py-28 mx-auto text-center">
        <h1 className="md:text-6xl text-4xl font-medium ">All Categories</h1>
        <div className="pt-4">
          <Link to="/shop" className="hover:text-[#73841B]">
            Shop
          </Link>
          <FontAwesomeIcon
            className="text-xl h-4 w-2 px-2"
            icon={faGreaterThan}
          />
          <span>Categories</span>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-8 md:my-20 my-12">
        {GetCategories.map((category, index) => (
          <div key={category} className="">
            <Link to={getLinkPaths(category)}>
              <img src={categoriesImages[index]} alt={category} />
            </Link>
            <div className="">
              <h2 className="text-3xl font-bold">{category}</h2>
              <h3 className="text-3xl font-light">
                {category.length} Products
              </h3>
              <Link to={getLinkPaths(category)}>
                <h2 className="text-xl text-black">View Products</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <FreeReturnQuality/>
    </div>
  );
};

export default Categories;
