import Slider from "react-slick";
import OurProductData from "./OurProductsData";
import "../Styles/OurProducts.css";
import ReactStars from "react-stars";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { SendCart } from "../../Common/Context/Context";
import { Vortex } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurProducts = () => {
  const { addToWishlist, addToCart } = useContext(SendCart);
  const [currentProductType, setCurrentProductType] = useState("NewProduct");
  const [loader, setLoader] = useState(false);
  const handleClick = (productType) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 250);
    setCurrentProductType(productType);
  };

  const getProductData = () => {
    if (currentProductType) {
      return OurProductData[currentProductType];
    }
    return [];
  };

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

  // slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto all_products my-20">
      <h1
        style={{ letterSpacing: "2px" }}
        className="text-4xl text-center text-[#73841B] font-bold py-4"
      >
        OUR PRODUCTS
      </h1>
      <div className="flex mx-auto justify-between lg:w-1/2 sm:1/3 w-full my-4">
        <button
          className="font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B]"
          onClick={() => handleClick("NewProduct")}
        >
          New Products
        </button>
        <button
          className="font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B]"
          onClick={() => handleClick("SpecialProduct")}
        >
          Special Products
        </button>
        <button
          className="font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B]"
          onClick={() => handleClick("BestSeller")}
        >
          Best Seller Products
        </button>
        <button
          className="font-bold text-gray-500 hover:underline underline-offset-4  hover:text-[#73841B]"
          onClick={() => handleClick("FeaturedProduct")}
        >
          Featured Products
        </button>
      </div>
      {loader ? (
        <div className="mx-auto flex justify-center">
          {" "}
          <Vortex
            visible={true}
            height="180"
            width="180"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "green",
              "yellow",
              "yellowGreen",
              "green",
              "yellow",
              "green",
            ]}
          />
        </div>
      ) : (
        <div>
          <ToastContainer />
          {currentProductType && (
            <div>
              <h2 className="text-2xl py-2 font-light text-[#73841B]">{currentProductType}:</h2>
              <div className="">
                <Slider {...settings}>
                  {getProductData().map((product) => {
                    let isHovered = hovered === product.id;
                    return (
                      <div key={product.id} className="mx-auto">
                        <div className="mx-1 product_slider">
                          <Link
                            to={`/shop/our-product/${product.id}`}
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

                          <div className="lg:mt-5 md:mt-0 mt-16">
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
                </Slider>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OurProducts;


