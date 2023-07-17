
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
const FeaturedProduct = () => {
  const FeaturedProduct = OurProductsData["FeaturedProduct"];
  const { addToWishlist, addToCart } = useContext(SendCart);
  const handleAddToCart = (product, id) => {
    toast.success("Product has been added to the cart Successfully!");
    addToCart({ ...product, id: id });
    // and also save in localStorage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push({ ...product, id: id });
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const handleAddToWishlist = (product, id) => {
    toast.success("Product has been added to the wishlist successfully!", {
      theme: "colored",
    });
    addToWishlist({ ...product, id: id });
    // and also we set data in localStorage
    const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistData.push({ ...product, id: id });
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  // console.log(FeaturedProduct);
  return (
   <div>
     <div className="mx-auto w-11/12">
      <ToastContainer />
      <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 sm:gap-6 sm:grid-cols-2 grid-cols-1 gap-8">
        {FeaturedProduct.map((product) => {
          let isHovered = hovered === product.id;
          return (
            <div key={product.id} className="mx-auto">
              <div className="mx-1 product_slider">
                <Link
                  to={`/shop/category/special-product/${product.id}`}
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
                  <h1 className="text-xl font-medium">{product.productName}</h1>
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
      <FreeReturnQuality/>
   </div>
  );
};

export default FeaturedProduct;

// When we want to store data, we first need to convert the JavaScript object into a JSON string using JSON.stringify(). This is necessary because local storage can only store string values.
// Once we have the JSON string, we can use localStorage.setItem() to set the data in local storage.
// When retrieving data from local storage, we use localStorage.getItem() to get the stored JSON string. To work with the data as a JavaScript object, we use JSON.parse() to convert the JSON string back into its original form.
// To update the stored data, we follow a similar process. We retrieve the JSON string, use JSON.parse() to convert it into a JavaScript object, make the necessary modifications, and then convert the updated object back into a JSON string using JSON.stringify(). Finally, we use localStorage.setItem() to store the updated JSON string in local storage.
// If we want to remove data from local storage, we can simply use localStorage.removeItem() and provide the key of the item to be removed.
// In summary, when working with local storage, we use JSON.stringify() to convert JavaScript objects to JSON strings when storing data, and JSON.parse() to convert JSON strings back to JavaScript objects when retrieving or updating data. By following this approach, we can effectively store, retrieve, update, and remove data in local storage.
// the localStorage.setItem takes two parameters key and value it take key in string form and second value = data that is actual data
// and localStorage.getItem takes one parameter key which is representing that we want get data from which key
// and same localStorage.removeItem takes one parameter key which is representing that we want remove data from which key
