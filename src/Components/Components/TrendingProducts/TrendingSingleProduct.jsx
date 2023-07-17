import { useParams } from "react-router-dom";
import TrendingProductsData from "./TrendingProductsData";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ReactStars from "react-stars";
import payments from "../../../assets/PaymentsGateway/trust_image.webp";
import facebook from "../../../assets/SocialIcons/facebook.png";
import instagram from "../../../assets/SocialIcons/instagram.png";
import pinterest from "../../../assets/SocialIcons/pinterest.png";
import twitter from "../../../assets/SocialIcons/twitter.png";
import { SendCart } from "../../../Common/Context/Context";
const TrendingSingleProduct = () => {
  const { addToCart } = useContext(SendCart);
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [mainImage, setMainImage] = useState("");
  const [activeButton, setActiveButton] = useState("description");
  const handleMainImage = (image) => {
    setMainImage(image);
  };
  const { id } = useParams();
  const productId = parseInt(id);
  const TrendingProduct = TrendingProductsData.find(
    (product) => product.id === productId
  );
  const increaseCount = () => {
    setIncrement(increment + 1);
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count >= 1) {
      setDecrement(decrement - 1);
      setCount(count - 1);
    }
  };

  const handleAddToCart = (product, id) => {
    const total = count + increment - decrement;
    if (total > 0) {
      for (let i = 0; i < total; i++) {
        addToCart({ ...product, id: id });
      }
    }
  };
  const handleActiveButton = (button) => {
    setTimeout(() => {
      setActiveButton(button);
    }, 0);
  };
  //   console.log(TrendingProduct.sku);
  return (
    <div className="mx-auto w-11/12">
      {/* product images  */}
      <div className=" w-11/12 sm:flex block items-center md:my-10 my-5">
        <div className="sm:w-1/2 w-full flex items-center">
          <div className={`2/3  `}>
            <img
              className="cursor-pointer w-full h-full object-contain transition-all ease-in-out duration-1000 "
              src={mainImage || TrendingProduct.image1}
              alt={TrendingProduct.name}
            />
          </div>
          <div className=" justify-between w-1/3 ml-4">
            <img
              onClick={() => handleMainImage(TrendingProduct.image1)}
              className="w-32 mb-4 cursor-pointer"
              src={TrendingProduct.image1}
              alt={TrendingProduct.name}
            />
            <img
              onClick={() => handleMainImage(TrendingProduct.image2)}
              className="w-32 mb-4 cursor-pointer"
              src={TrendingProduct.image2}
              alt={TrendingProduct.name}
            />
            <img
              onClick={() => handleMainImage(TrendingProduct.image3)}
              className="w-32 mb-4 cursor-pointer"
              src={TrendingProduct.image3}
              alt={TrendingProduct.name}
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <h1 className=" text-3xl font-bold">{TrendingProduct.productName}</h1>
          <div className="border-b-[0.5px] border-b-gray-400 my-5"></div>
          <ReactStars count={5} size={24} color2={"#ffd700"} value={3} />
          <div className="flex font-bold py-2">
            <p>Availabitlity:</p>
            <div className="pl-2 font-medium">
              {TrendingProduct.availability <= 5 ? (
                <span>Low stock: {TrendingProduct.availability} Left</span>
              ) : (
                <span>In stock: {TrendingProduct.availability} Left</span>
              )}
            </div>
          </div>
          <div className="flex items-center py-2">
            <p className="font-bold text-2xl">${TrendingProduct.oldPrice}.00</p>
            <s className="font-medium text-xl text-gray-500 pl-2">
              ${TrendingProduct.price}.00
            </s>
            <button className="bg-red-700 p-2 text-white rounded-full ml-3">
              {TrendingProduct.discount}%
            </button>
          </div>
          <div>
            <p className="text-gray-500">
              Juicy and refreshing produce that are naturally sweet and packed
              with essential vitamins and minerals. Nutrient-rich and versatile,
              vegetables provide a wide range of flavors, textures, and colors,
              making them a vital part of a healthy diet.
            </p>
          </div>
          <div className="w-[200px] h-[40px] my-5  flex justify-between items-center">
            <h1 className="text-xl font-bold">Quantity:</h1>
            <div className="border-[0.5px] border-gray-500 h-[40px] flex items-center">
              <button
                className="w-[40px] h-[30px] font-bold text-xl"
                onClick={decreaseCount}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="w-[40px] h-[30px] bgfont-bold text-xl"
                onClick={increaseCount}
              >
                +
              </button>
            </div>
          </div>
          <div className="my-5">
            <button
              onClick={() =>
                handleAddToCart(TrendingProduct, TrendingProduct.id)
              }
              className="bg-[#73841B] mr-2 text-white hover:bg-black py-2 px-7  rounded-full"
            >
              Add to Cart
            </button>
            <button className="bg-black ml-4 text-white hover:bg-[#73841B] py-2 px-7  rounded-full">
              <Link to="/cart">Buy Now</Link>
            </button>
          </div>
          <div className="my-5">
            <p className="font-bold text-xl">
              SKU:{" "}
              <span className="text-lg font-normal">{TrendingProduct.sku}</span>
            </p>
          </div>

          <div className="my-5 flex">
            <div className="font-bold text-xl flex">
              Share:
              <div className="flex ml-2">
                <a
                  href={`https://www.facebook.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="ml-2" src={facebook} alt="facebook" />
                </a>
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="ml-2" src={instagram} alt="instagram" />
                </a>
                <a
                  href={`https://www.twitter.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="ml-2" src={twitter} alt="twitter" />
                </a>
                <a
                  href={`https://www.pinterest.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="ml-2" src={pinterest} alt="pinterest" />
                </a>
              </div>
            </div>
          </div>

          <div className="my-5">
            <img src={payments} alt="Trust Image" />
          </div>
        </div>
      </div>
      {/* bottom part longDescription and review  */}
      <div className="md:my-10 my-5">
        {/*  buttons to show reviews and long description  */}
        <div className="flex justify-between md:w-2/3 mx-auto">
          <button
            onClick={() => handleActiveButton("description")}
            className={`font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B] ${
              activeButton ? "text-[#73841B] underline-offset-4 underline" : ""
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => handleActiveButton("additional")}
            className={`font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B] ${
              activeButton ? "text-[#73841B] underline-offset-4 underline" : ""
            }`}
          >
            ADDITIONAL INFORMATION
          </button>
          <button
            onClick={() => handleActiveButton("reviews")}
            className={`font-bold text-gray-500  hover:underline underline-offset-4 hover:text-[#73841B] ${
              activeButton ? "text-[#73841B] underline-offset-4 underline" : ""
            }`}
          >
            REVIEWS
          </button>
        </div>
        {activeButton === "description" && (
          <div className="md:my-7 my-4">
            <h1 className="md:text-2xl text-xl font-bold py-3">
              Exquisite Flavors Bursting with Natural Goodness
            </h1>
            <p className="text-gray-500">
              Our fruit products offer a delightful experience with their
              exquisite flavors and vibrant colors. Each piece of fruit is
              carefully selected at its peak of ripeness, ensuring optimal taste
              and nutritional value. Whether it's a succulent apple, a juicy
              orange, or a refreshing watermelon, our fruit products are
              bursting with natural goodness. We source our fruits from trusted
              farmers who employ sustainable practices, prioritizing quality and
              freshness. From orchard to your table, we take pride in delivering
              the finest fruit products that bring joy and nourishment to your
              everyday life.
            </p>
            <h1 className="md:text-2xl text-xl font-bold py-3">
              Natures Bounty of Nutrients and Vibrant Colors
            </h1>
            <p className="text-gray-500">
              Discover the endless possibilities that our vegetable products
              offer in your kitchen. Whether you're looking to create a
              refreshing salad, a hearty stew, or a flavorful stir-fry, our
              vegetables bring vibrant colors, distinct flavors, and an
              abundance of essential vitamins and minerals to your meals. From
              supporting digestion to promoting overall well-being, these
              nutrient-packed vegetables are a vital part of a balanced diet.
              Experience the goodness of nature as you explore the array of
              tastes and textures our vegetable products provide. Elevate your
              culinary creations and embrace the wholesome goodness of fresh,
              locally sourced vegetables.
            </p>
          </div>
        )}
        {/* additional infromation */}
        {activeButton === "additional" && (
          <div className=" md:my-7 my-4">
            <div className="flex">
              <div className="sm:w-1/3 w-1/2 font-bold text-xl border-[0.5px] border-gray-400 p-3">
                Size:
              </div>
              <div className="sm:w-2/3 w-1/2 text-gray-500 text-xl border-[0.5px] border-gray-400 p-3">
                {TrendingProduct.size}Kg
              </div>
            </div>

            <div className="flex">
              <div className="sm:w-1/3 w-1/2 font-bold text-xl border-[0.5px] border-gray-400 p-3">
                SKU:
              </div>
              <div className="sm:w-2/3 w-1/2 text-gray-500 text-xl border-[0.5px] border-gray-400 p-3">
                {TrendingProduct.sku}
              </div>
            </div>

            <div className="flex">
              <div className="sm:w-1/3 w-1/2 font-bold text-xl border-[0.5px] border-gray-400 p-3">
                Weight:
              </div>
              <div className="sm:w-2/3 w-1/2 text-gray-500 text-xl border-[0.5px] border-gray-400 p-3">
                {TrendingProduct.weight}Kg
              </div>
            </div>
          </div>
        )}
        {/* review  */}
        {activeButton === "reviews" && (
          <div className="md:my-7 my-4">Your review here</div>
        )}
      </div>
    </div>
  );
};

export default TrendingSingleProduct;
