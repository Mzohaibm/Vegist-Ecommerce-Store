import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurProductsData from "../../Components/OurProductsData";
import { useContext } from "react";
import { SendCart } from "../../../Common/Context/Context";
import { useState } from "react";
import FreeReturnQuality from "../../Components/FreeReturnQuality/FreeReturnQuality";
const BestSeller = () => {
  const BestSeller = OurProductsData["BestSeller"];
  const { addToWishlist, addToCart } = useContext(SendCart);
  const handleAddToCart = (product, id) => {
    toast.success("Product has been added to the cart Successfully!");
    addToCart({ ...product, id: id });
  };

  const handleAddToWishlist = (product, id) => {
    toast.success("Product has been added to the wishlist successfully!", {
      theme: "colored",
    });
    addToWishlist({ ...product, id: id });
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  console.log(BestSeller);
  return (
    <div>
      <div className="mx-auto w-11/12">
        <ToastContainer />
        <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 sm:gap-6 sm:grid-cols-2 grid-cols-1 gap-8">
          {BestSeller.map((product) => {
            let isHovered = hovered === product.id;
            return (
              <div key={product.id} className="mx-auto">
                <div className="mx-1 product_slider">
                  <Link
                    to={`/shop/category/best-seller-product/${product.id}`}
                    className="hoveredImages"
                    onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isHovered ? (
                      <div className="h-96">
                        <img src={product.image2} alt={product.name} />
                        <div className="flex hover:scale-125 ease-linear duration-300 CartWishlist -translate-y-20 mx-auto w-[120px] justify-between">
                          <div
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToWishlist(product, product.id);
                            }}
                            className="rounded-full p-2 text-center flex items-center justify-center bg-[#73841B] text-white hover:bg-black h-[45px] w-[45px]"
                            style={{ zIndex: 2 }}
                          >
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon={faHeart}
                              fade
                            />
                          </div>
                          <div
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(product, product.id);
                            }}
                            className="rounded-full p-2 text-center flex items-center justify-center bg-black text-white hover:bg-[#73841B] h-[45px] w-[45px]"
                            style={{ zIndex: 2 }}
                          >
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon={faShoppingBag}
                              fade
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-96">
                        <img src={product.image1} alt={product.name} />
                      </div>
                    )}
                  </Link>
                  <div className="lg:mt-5 md:mt-0 sm:mt-16 mt-32 ">
                    <h1 className="text-xl font-medium">
                      {product.productName}
                    </h1>
                    <ReactStars
                      count={5}
                      size={24}
                      color2={"#ffd700"}
                      value={3}
                    />
                    <p className="font-bold text-xl">
                      ${product.price}.00{" "}
                      <s className="font-medium pl-2 text-md ">
                        ${product.oldPrice}.00
                      </s>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FreeReturnQuality />
    </div>
  );
};

export default BestSeller;


