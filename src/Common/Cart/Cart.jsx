import { useContext } from "react";
import { SendCart } from "../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseCartItem } =
    useContext(SendCart);
  const TotalPrice = cartItems.reduce((price, item) => {
    return price + item.qty * item.price;
  }, 0);
  // get data from localStorage
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(storedCartItems, " it is cart");
  return (
    <div className="w-11/12 mx-auto my-8">
      {cartItems.length === 0 && cartItems.length < 1 ? (
        <div className="mx-auto text-center">
          <h1 className="text-center text-gray-500 text-4xl">
            Your Cart is empty
          </h1>
          <Link to="/shop" className="text-2xl font-bold">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <div>
              {storedCartItems.map((item, id) => (
                <div className="border-gray-500 border-[1px] my-10" key={id}>
                  <div className="md:flex block">
                    <div className="md:w-2/5 w-full ">
                      <h1 className="font-medium text-xl p-3 border-[0.5px] border-gray-500">
                        Product Detail
                      </h1>
                      <div className="flex items-center p-3">
                        <img
                          className="w-40 "
                          src={item.image1}
                          alt={item.name}
                        />
                        <div className="ml-8">
                          <p className="font-medium text-xl">
                            {item.productName}
                          </p>
                          <p className="text-gray-500 font-thin text-md">
                            {item.weight}Kg
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full md:mx-auto md:text-center">
                      <h1 className="font-medium text-xl p-3 border-[0.5px] border-gray-500">
                        Product Price
                      </h1>
                      <p className="text-gray-500 font-thin text-lg p-3">
                        ${item.price}.00
                      </p>
                    </div>
                    <div className="md:w-1/5 w-full md:mx-auto md:text-center">
                      <h1 className="font-medium text-xl p-3 border-[0.5px] border-gray-500">
                        Product Quantity
                      </h1>
                      <div className="p-3">
                        <div className="flex md:mx-auto w-[140px] justify-between items-center">
                          <button
                            className="w-[50px] border-black border-2 h-[40px] text-2xl font-bold"
                            onClick={() => decreaseCartItem(item)}
                          >
                            -
                          </button>
                          <p className="font-bold text-xl">{item.qty}</p>
                          <button
                            className="w-[50px] border-black border-2 h-[40px] text-2xl font-bold"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </button>
                        </div>
                        <div className="my-3">
                          <button
                            className=" text-2xl font-bold"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/5 w-full md:mx-auto md:text-center">
                      <h1 className="font-medium text-xl p-3 border-[0.5px] border-gray-500">
                        Total Price
                      </h1>
                      <p className="text-black  font-medium text-2xl p-3">
                        ${TotalPrice}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-8">
              <Link
                to="/shop"
                className="md:px-10 md:py-5 px-5 py-3 bg-black text-white hover:bg-[#73841B]"
              >
                UPDATE CART
              </Link>
              <Link
                to="/shop"
                className="md:px-10 md:py-5 px-5 py-3 ml-4 bg-black text-white hover:bg-[#73841B]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
          <div className="p-10 border-gray-400 border-[0.5px]">
            <p className="text-2xl border-b-gray-400 border-b-[0.5px] pb-4 font-medium">
              Cart Totals
            </p>
            <div className="flex justify-between w-1/2 py-4">
              <p className="text-xl font-medium">Total</p>
              <p className="text-xl font-bold">${TotalPrice}.00</p>
            </div>
            <Link
              to="/checkout"
              className="md:px-20 md:py-5 px-7 py-3 bg-black text-white hover:bg-[#73841B]"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
