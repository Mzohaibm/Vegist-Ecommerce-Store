import { useContext } from "react";
import { SendCart } from "../Context/Context";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, clearWishlist } = useContext(SendCart);
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  return (
    <div className="mx-auto w-11/12">
      {wishlist.length === 0 || wishlist.length < 1 ? (
        <div className="mx-auto text-center">
          <h1 className="text-center text-gray-500 text-4xl">
            Your Wishlist is currently empty
          </h1>
          <Link to="/shop" className="text-2xl font-bold">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex justify-between py-5">
            <h1 className="font-medium text-xl">My Wishlist</h1>
            <h1 className="font-medium text-xl">
              Total Items: {wishlist.length}
            </h1>
          </div>
          {wishlistItems.map((item) => {
            return (
              <div className="my-6" key={item.id}>
                <div className="flex justify-between items-center border-y-gray-400 border-y-[0.5px] py-4">
                  <div className="sm:w-ful">
                    <img
                      className="w-40"
                      src={item.image1}
                      alt={item.productName}
                    />
                    <p className="text-xl font-medium">{item.productName}</p>
                  </div>
                  <div className="sm:w-ful">
                    <Link
                      to="/shop"
                      className="md:px-10 md:py-5 sm:px-5 sm:py-3 px-3 py-2  ml-4 bg-black text-white hover:bg-[#73841B]"
                    >
                      CONTINUE SHOPPING
                    </Link>
                  </div>
                  <div className="sm:w-ful">
                    <p className="text-xl text">${item.price}.00</p>
                    <p className="text-xl text-gray-400 font-medium">
                      ${item.oldPrice}.00
                    </p>
                    <button
                      className="text-xl font-medium"
                      onClick={() => clearWishlist(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
