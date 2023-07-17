import TrendingProductsData from "./TrendingProductsData";
import Slider from "react-slick";
import "../../Styles/TrendingProducts.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { SendCart } from "../../../Common/Context/Context";
import { useState } from "react";

const TrendingProducts = () => {
  const { addToWishlist, addToCart } = useContext(SendCart);
  const [hovered, setHovered] = useState(false);
  const handleAddToCart = (product, id) => {
    toast.success("Product has been added to the cart successfully!");
    addToCart({ ...product, id: id });
  };

  const handleAddToWishlist = (product, id) => {
    toast.success("Product has been added to the wishlist successfully!", {
      theme: "colored",
    });
    addToWishlist({ ...product, id: id });
  };

  const handleMouseEnter = (id) => {
    setHovered(id);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };
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
    <div className="w-11/12 mx-auto trending_products my-20">
      <h1
        style={{ letterSpacing: "1px" }}
        className="text-4xl text-center text-[#73841B] font-bold py-4"
      >
        TRENDING PRODUCTS
      </h1>
      <Slider {...settings}>
        {TrendingProductsData.map((product) => (
          <div key={product.id} className="mx-auto">
            <div className="mx-1 product_slider">
              <Link
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave()}
                to={`/shop/trending-product/${product.id}`}
                className="hoveredImages"
              >
                {hovered === product.id ? (
                  <div className="h-96">
                    <img
                      src={product.image1}
                      alt={product.productName}
                      className="product_image"
                    />
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
                    <img
                      src={product.image2}
                      alt={product.name}
                      className="product_image"
                    />
                  </div>
                )}
              </Link>
              <div className="lg:mt-5 md:mt-0 mt-16">
                <h1 className="text-xl font-medium">{product.productName}</h1>
                <ReactStars count={5} size={24} color2={"#ffd700"} value={3} />
                <p className="font-bold text-xl">
                  ${product.price}.00{" "}
                  <s className="font-medium pl-2 text-md ">
                    ${product.oldPrice}.00
                  </s>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default TrendingProducts;
