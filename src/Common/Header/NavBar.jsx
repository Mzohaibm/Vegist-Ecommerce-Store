import { Link, NavLink } from "react-router-dom";
import NavLogo from "../../assets/NavBar/logo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faXmark,
  faUser,
  faHeart,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../Style/Header.css";
import { SendCart } from "../Context/Context";
import { useContext } from "react";
import user from "../../assets/Header/user.png";
import basket from "../../assets/Header/basket.png";
import heart from "../../assets/Header/heart.png";
import searchs from "../../assets/Header/search.png";
const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { cartItems, wishlist } = useContext(SendCart);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const encodedQuery = encodeURIComponent(searchQuery);
      window.location.href = `/search?q=${encodedQuery}`;
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleSearch = () => {
    setSearch(!search);
  };
  return (
    <div className="bg-green py-5 relative">
      <div className="mx-auto w-11/12 flex justify-between items-center">
        <div className="lg:w-1/4 w-1/2">
          <img className="w-24" src={NavLogo} alt="vegist" />
        </div>
        <div className="lg:w-1/2 lg:flex justify-between hidden">
          <NavLink className="text-lg hover:text-[#73841b]   " to="/">
            Home
          </NavLink>
          <NavLink className="text-lg hover:text-[#73841b]   " to="/shop">
            Shop
          </NavLink>
          <NavLink className="text-lg hover:text-[#73841b]   " to="/about">
            About
          </NavLink>
          <NavLink className="text-lg hover:text-[#73841b]   " to="/categories">
            Categories
          </NavLink>
          <NavLink className="text-lg hover:text-[#73841b]   " to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-lg hover:text-[#73841b]   " to="/my-account">
            MyAccount
          </NavLink>
        </div>
        {/* for mobile menu  */}
        {mobileMenu && (
          <div
            style={{ background: "rgba(255,255,255,0.8)" }}
            className="flex justify-between items-center lg:hidden absolute w-full p-4  top-0 left-0 right-0 z-10"
          >
            <div className="flex flex-col">
              <button
                className="flex justify-start pb-2"
                onClick={() => setMobileMenu(false)}
              >
                <FontAwesomeIcon
                  className="text-2xl text-red-500"
                  icon={faClose}
                />
              </button>
              <NavLink className="text-lg hover:text-[#73841b]" to="/">
                Home
              </NavLink>
              <NavLink className="text-lg hover:text-[#73841b]" to="/shop">
                Shop
              </NavLink>
              <NavLink className="text-lg hover:text-[#73841b]" to="/about">
                About
              </NavLink>
              <NavLink
                className="text-lg hover:text-[#73841b]"
                to="/categories"
              >
                Categories
              </NavLink>
              <NavLink className="text-lg hover:text-[#73841b]" to="/contact">
                Contact
              </NavLink>
              <NavLink
                className="text-lg hover:text-[#73841b]"
                to="/my-account"
              >
                MyAccount
              </NavLink>
            </div>
            <div className="flex w-1/2 justify-between">
              <Link
                to="/my-account"
                className="rounded ml-2 px-4 py-3 text-white hover:scale-110 duration-300 ease-linear bg-[#73841b] "
              >
                <FontAwesomeIcon className="text-xl" icon={faUser} />
              </Link>
              <Link
                to="/cart"
                className="flex cart ml-2 rounded px-3 py-3 text-white hover:scale-110 duration-300 ease-linear bg-[#73841b]"
              >
                <FontAwesomeIcon className="text-xl" icon={faShoppingBag} />
                <span className="text-white cartCount text-lg pl-1 fong-bold">
                  {cartItems.length === 0 ? "" : cartItems.length}
                </span>
              </Link>
              <Link
                to="/wishlist"
                className="flex cart ml-2 rounded px-3 py-3 text-white hover:scale-110 duration-300 ease-linear bg-[#73841b]"
              >
                <FontAwesomeIcon className="text-xl" icon={faHeart} />
                <span className=" cartCount text-lg pl-1 fong-bold text-white">
                  {cartItems.length === 0 ? "" : wishlist.length}
                </span>
              </Link>
            </div>
          </div>
        )}
        {/* right side icons  */}
        <div className="flex lg:w-1/4 items-center justify-end">
          <div className="flex items-center relative">
            <div
              onClick={toggleSearch}
              className="cart ml-2 rounded-full px-3 py-2 cursor-pointer"
            >
              {search ? (
                <FontAwesomeIcon className="text-xl" icon={faXmark} />
              ) : (
                // <FontAwesomeIcon className="text-xl" icon={faSearch} />
                <img src={searchs} alt="user" />
              )}
            </div>
            {search && (
              <div className="absolute z-10  right-0 top-12 flex shadow-4xl transition-all duration-300">
                <input
                  className="bg-gray-200 md:w- p-3 focus:outline-none"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={handleSearch}
                  className="py-3 px-4 bg-[#73841b] hover:bg-black"
                >
                  <FontAwesomeIcon className="text-white" icon={faSearch} />
                </button>
              </div>
            )}
          </div>
          {/* toggleMobileMenu bar  */}
          <button onClick={toggleMobileMenu} className="lg:hidden">
            <FontAwesomeIcon
              className="text-2xl font-bold hover:text-[#73841b] hover:scale-110 duration-200 ease-linear"
              icon={faBars}
            />
          </button>
          <Link
            to="/my-account"
            className="rounded-full ml-2 sm:px-3 px-1 py-2 lg:block hidden"
          >
            {/* <FontAwesomeIcon className="text-xl" icon={faUser} /> */}
            <img src={user} alt="user" />
          </Link>
          <Link
            to="/cart"
            className="lg:flex hidden cart ml-2 rounded-full sm:px-3 px-1 py-2"
          >
            {/* <FontAwesomeIcon className="text-xl" icon={faShoppingBag} /> */}
            <img src={basket} alt="user" />
            <span className="text-black cartCount text-lg pl-1 fong-bold">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </Link>
          <Link
            to="/wishlist"
            className="lg:flex hidden cart ml-2 rounded-full sm:px-3 px-1 py-2"
          >
            {/* <FontAwesomeIcon className="text-xl" icon={faHeart} /> */}
            <img src={heart} alt="user" />
            <span className="text-black cartCount text-lg pl-1 fong-bold">
              {cartItems.length === 0 ? "" : wishlist.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
