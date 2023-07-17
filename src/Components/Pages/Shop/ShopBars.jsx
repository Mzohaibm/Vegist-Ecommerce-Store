// a complete shop page with side bar w 
import "../../Styles/ShopBar.css";
import row from "../../../assets/Shop/row.png";
import col from "../../../assets/Shop/col.png";
import side_bar from "../../../assets/Shop/side_bar.webp";
import hero_banner from "../../../assets/Shop/heroBanner.webp";
import OurProductData from "../../Components/OurProductsData";
import { useContext, useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faFilter,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SendCart } from "../../../Common/Context/Context";
import { ToastContainer, toast } from "react-toastify";
const ShopBars = () => {
  const products = Object.values(OurProductData).flat();
  const [selectedWeight, setSelectedWeight] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [resetButton, setResetButton] = useState(null);
  const [filterProducts, setFilterProducts] = useState(products);
  const [loader, setLoader] = useState([]);
  const { addToWishlist, addToCart } = useContext(SendCart);
  const [hovered, setHovered] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [rowView, setRowView] = useState(false);
  const [colView, setColView] = useState(true);
  const handleToggleRow = () => {
    setRowView(true);
    setColView(false);
  };
  const handleToggleCol = () => {
    setColView(true);
    setRowView(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
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
  const handleReset = () => {
    setSelectedWeight([]);
    setSelectedPrice(null);
    setSelectedTypes([]);
    setResetButton(Date.now());
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(Number(price));
  };

  const handleWeightChange = (weight) => {
    setSelectedWeight((prevSelectedWeights) => {
      if (prevSelectedWeights.includes(weight)) {
        return prevSelectedWeights.filter(
          (selectedWeight) => selectedWeight !== weight
        );
      } else {
        return [...prevSelectedWeights, weight];
      }
    });
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter(
          (selectedType) => selectedType !== type
        );
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 100);

    const filteredProducts = products.filter((product) => {
      if (
        (selectedPrice && product.price > selectedPrice) ||
        (selectedWeight.length > 0 &&
          !selectedWeight.includes(product.weight)) ||
        (selectedTypes.length > 0 &&
          !selectedTypes.includes(product.productType))
      ) {
        return false;
      }
      return true;
    });

    setFilterProducts(filteredProducts);
    setLoader(false);
  }, [selectedPrice, selectedWeight, selectedTypes, resetButton]);

  return (
    <div className="mx-auto w-11/12 relative">
      {/* hero banner  */}
      <div className="my-5">
        <img src={hero_banner} alt="hero_banner" className="w-full h-full" />
      </div>
      {/* mobilemenubuttons  */}
      <div className="md:hidden flex items-center justify-between">
        <div className="">
          <button onClick={toggleMobileMenu}>
            {mobileMenu ? (
              ""
            ) : (
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  className="text-3xl text-[#73841B]"
                  icon={faFilter}
                />
                <h2 className="pl-3 text-xl font-medium">Filter</h2>
              </div>
            )}
          </button>
        </div>
        <div className="flex justify-between w-1/2">
          <button onClick={handleToggleCol}>
            <img className="sm:w-10 w-8" src={col} alt="" />
          </button>
          <button onClick={handleToggleRow}>
            <img  className="sm:w-10 w-8"src={row} alt="" />
          </button>
        </div>
      </div>
      <div className="flex my-10">
        {/* left side bar  */}
        <div className="left_bar hidden md:block md:w-1/3 lg:w-1/4">
          {/* row and col  */}
          <div className="md:flex hidden justify-between w-full py-8">
            <button onClick={handleToggleCol}>
              <img src={col} alt="" />
            </button>
            <button onClick={handleToggleRow}>
              <img src={row} alt="" />
            </button>
          </div>
          {/* price  */}
          <div className=" border-y-[0.5px] border-gray-300 py-8">
            <h1 className="text-lg py-2 font-medium ">Price</h1>
            <div className="flex justify-between py-2">
              <h2>The highest price is 32$</h2>
              <button
                onClick={handleReset}
                className="text-gray-500 underline-offset-4 underline"
              >
                Reset
              </button>
            </div>
            {/* action  */}
            <div>
              <input
                className="w-full h-[2px] border-none"
                type="range"
                name=""
                value={selectedPrice || ""}
                id=""
                min="8"
                max="32"
                onChange={handlePriceChange}
              />
            </div>
            <div className="price"></div>
          </div>
          {/* size  */}
          <div className=" border-y-[0.5px] border-gray-300 py-8">
            <h1 className="text-lg py-2 font-medium ">Size</h1>
            <div className="flex justify-between py-2">
              <h2>{selectedWeight.length} Selected</h2>
              <button
                onClick={handleReset}
                className="text-gray-500 underline-offset-4 underline"
              >
                Reset
              </button>
            </div>
            {/* size checkboxes  */}
            <div className="no_select">
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="1kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="1kg"
                    checked={selectedWeight.includes(1)}
                    onChange={() => handleWeightChange(1)}
                  />
                  <span className="pl-1 no_select">1kg</span>
                </label>
                <p>(5)</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="2kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="2kg"
                    onChange={() => handleWeightChange(2)}
                    checked={selectedWeight.includes(2)}
                  />
                  <span className="pl-1 no_select">2kg</span>
                </label>
                <p>(5)</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="3kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="3kg"
                    onChange={() => handleWeightChange(3)}
                    checked={selectedWeight.includes(3)}
                  />
                  <span className="pl-1 no_select">3kg</span>
                </label>
                <p>(5)</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="4kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="4kg"
                    onChange={() => handleWeightChange(4)}
                    checked={selectedWeight.includes(4)}
                  />
                  <span className="pl-1 no_select">4kg</span>
                </label>
                <p>(5)</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="5kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="5kg"
                    onChange={() => handleWeightChange(5)}
                    checked={selectedWeight.includes(5)}
                  />
                  <span className="pl-1 no_select">5kg</span>
                </label>
                <p>(5)</p>
              </div>{" "}
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="6kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="6kg"
                    onChange={() => handleWeightChange(6)}
                    checked={selectedWeight.includes(6)}
                  />
                  <span className="pl-1 no_select">6kg</span>
                </label>
                <p>(5)</p>
              </div>{" "}
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="7kg">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="7kg"
                    checked={selectedWeight.includes(7)}
                    onChange={() => handleWeightChange(7)}
                  />
                  <span className="pl-1 no_select">7kg</span>
                </label>
                <p>(5)</p>
              </div>
            </div>
            <div className="price"></div>
          </div>
          {/*filter by product type  */}
          <div className=" border-y-[0.5px] border-gray-300 py-8">
            <h1 className="text-lg py-2 font-medium ">Product Type</h1>
            <div className="flex justify-between py-2">
              <h2>{selectedTypes.length} Selected</h2>
              <button
                onClick={handleReset}
                className="text-gray-500 underline-offset-4 underline"
              >
                Reset
              </button>
            </div>
            <div className="flex justify-between items-center py-2">
              <label className="flex items-center" htmlFor="fruits">
                <input
                  className="text-black w-4 h-4 rounded-full"
                  type="checkbox"
                  name=""
                  id="fruits"
                  checked={selectedTypes.includes("Fruit")}
                  onChange={() => handleTypeChange("Fruit")}
                />
                <span className="pl-1 no_select">Fruits</span>
              </label>
              <p>(19)</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <label className="flex items-center" htmlFor="vegetables">
                <input
                  className="text-black w-4 h-4 rounded-full"
                  type="checkbox"
                  name=""
                  id="vegetables"
                  checked={selectedTypes.includes("vegetable")}
                  onChange={() => handleTypeChange("vegetable")}
                />
                <span className="pl-1 no_select">Vegetables</span>
              </label>
              <p>(5)</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <img
              className="hover:brightness-75"
              src={side_bar}
              alt="Side_banner"
            />
          </div>
        </div>
        {/* sidebar responsive on mobileMenu  */}
        {/* mobileMenu */}
        {mobileMenu && (
          <div
            className="left_bar block md:hidden  h-auto absolute p-10 z-10  top-0 left-0 w-full"
            style={{ background: "rgba(255,255,255,0.9)" }}
          >
            {/* price  */}
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <FontAwesomeIcon
                className="text-6xl hover:text-red-500"
                icon={faClose}
              />
            </button>
            <div className=" border-y-[0.5px] border-gray-300 py-8">
              <h1 className="text-lg py-2 font-medium ">Price</h1>
              <div className="flex justify-between py-2">
                <h2>The highest price is 32$</h2>
                <button
                  onClick={handleReset}
                  className="text-gray-500 underline-offset-4 underline"
                >
                  Reset
                </button>
              </div>
              {/* action  */}
              <div>
                <input
                  className="w-full h-[2px] border-none"
                  type="range"
                  name=""
                  value={selectedPrice || ""}
                  id=""
                  min="8"
                  max="32"
                  onChange={handlePriceChange}
                />
              </div>
              <div className="price"></div>
            </div>
            {/* size  */}
            <div className=" border-y-[0.5px] border-gray-300 py-8">
              <h1 className="text-lg py-2 font-medium ">Size</h1>
              <div className="flex justify-between py-2">
                <h2>{selectedWeight.length} Selected</h2>
                <button
                  onClick={handleReset}
                  className="text-gray-500 underline-offset-4 underline"
                >
                  Reset
                </button>
              </div>
              {/* size checkboxes  */}
              <div className="no_select">
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="1kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="1kg"
                      checked={selectedWeight.includes(1)}
                      onChange={() => handleWeightChange(1)}
                    />
                    <span className="pl-1 no_select">1kg</span>
                  </label>
                  <p>(5)</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="2kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="2kg"
                      onChange={() => handleWeightChange(2)}
                      checked={selectedWeight.includes(2)}
                    />
                    <span className="pl-1 no_select">2kg</span>
                  </label>
                  <p>(5)</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="3kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="3kg"
                      onChange={() => handleWeightChange(3)}
                      checked={selectedWeight.includes(3)}
                    />
                    <span className="pl-1 no_select">3kg</span>
                  </label>
                  <p>(5)</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="4kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="4kg"
                      onChange={() => handleWeightChange(4)}
                      checked={selectedWeight.includes(4)}
                    />
                    <span className="pl-1 no_select">4kg</span>
                  </label>
                  <p>(5)</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="5kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="5kg"
                      onChange={() => handleWeightChange(5)}
                      checked={selectedWeight.includes(5)}
                    />
                    <span className="pl-1 no_select">5kg</span>
                  </label>
                  <p>(5)</p>
                </div>{" "}
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="6kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="6kg"
                      onChange={() => handleWeightChange(6)}
                      checked={selectedWeight.includes(6)}
                    />
                    <span className="pl-1 no_select">6kg</span>
                  </label>
                  <p>(5)</p>
                </div>{" "}
                <div className="flex justify-between items-center py-2">
                  <label className="flex items-center" htmlFor="7kg">
                    <input
                      className="text-black w-4 h-4 rounded-full"
                      type="checkbox"
                      name=""
                      id="7kg"
                      checked={selectedWeight.includes(7)}
                      onChange={() => handleWeightChange(7)}
                    />
                    <span className="pl-1 no_select">7kg</span>
                  </label>
                  <p>(5)</p>
                </div>
              </div>
              <div className="price"></div>
            </div>
            {/*filter by product type  */}
            <div className=" border-y-[0.5px] border-gray-300 py-8">
              <h1 className="text-lg py-2 font-medium ">Product Type</h1>
              <div className="flex justify-between py-2">
                <h2>{selectedTypes.length} Selected</h2>
                <button
                  onClick={handleReset}
                  className="text-gray-500 underline-offset-4 underline"
                >
                  Reset
                </button>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="fruits">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="fruits"
                    checked={selectedTypes.includes("Fruit")}
                    onChange={() => handleTypeChange("Fruit")}
                  />
                  <span className="pl-1 no_select">Fruits</span>
                </label>
                <p>(19)</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center" htmlFor="vegetables">
                  <input
                    className="text-black w-4 h-4 rounded-full"
                    type="checkbox"
                    name=""
                    id="vegetables"
                    checked={selectedTypes.includes("vegetable")}
                    onChange={() => handleTypeChange("vegetable")}
                  />
                  <span className="pl-1 no_select">Vegetables</span>
                </label>
                <p>(5)</p>
              </div>
            </div>
            <div className="hidden md:flex">
              <img
                className="hover:brightness-75"
                src={side_bar}
                alt="Side_banner"
              />
            </div>
          </div>
        )}

        {/* that right bar ater filtering  */}
        <div className="right_data md:w-2/3  lg:w-3/4 ml-8">
          {loader ? (
            <div
              className={`grid 
             ${
               rowView
                 ? "grid grid-cols-1 gap-8 "
                 : " grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-2 gap-12"
             }`}
            >
              {/* filterProducts */}
              {filterProducts.map((product) => (
                <div key={product.id} className="mx-auto">
                  <div
                    className={` product_slider  ${
                      rowView ? "flex justify-between items-center h-full" : ""
                    }`}
                  >
                    <div className={`${rowView ? "sm:w-1/3 w-1/2" : ""}`}>
                      <Link
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={() => handleMouseLeave()}
                        to={`/shop/our-product/${product.id}`}
                        className="hoveredImages"
                      >
                        {hovered === product.id ? (
                          <div
                            className={`${rowView ? "h-full w-full" : "h-64"}`}
                          >
                            <img
                              src={product.image1}
                              alt={product.productName}
                              className="product_image"
                            />
                            <div
                              className={`flex hover:scale-100 ease-linear duration-300 CartWishlist -translate-y-10 mx-auto w-[100px] justify-between ${
                                rowView ? "mt-[-22.5px] mb-[-22.5px]" : ""
                              }`}
                            >
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
                          <div className={`${rowView ? "h-full" : "h-64"}`}>
                            <img
                              src={product.image2}
                              alt={product.name}
                              className="product_image"
                            />
                          </div>
                        )}
                      </Link>
                    </div>
                    <div
                      className={`${
                        rowView
                          ? "sm:w-2/3 w-1/2 pl-2 sm:p-4 s"
                          : "lg:mt-5 md:mt-28 sm:mt-32 mt-44"
                      }`}
                    >
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
                      <p
                        className={` ${
                          rowView ? "sm:block hidden font-medium " : "hidden"
                        }`}
                      >
                        Fruits are nutritious and delicious edible plant
                        products that typically have a sweet or tangy flavor.
                        They are often colorful and contain essential vitamins,
                        minerals, and dietary fiber, making them an important
                        part of a healthy diet. Vegetables are edible parts of
                        plants that are consumed for their nutritional value and
                        savory taste. They come in a wide variety of shapes,
                        sizes, and colors and are rich in vitamins, minerals,
                        and dietary fiber, contributing to overall health and
                        well-being.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShopBars;
