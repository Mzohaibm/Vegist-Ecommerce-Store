import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import trust from "../../assets/PaymentsGateway/trust_image.webp";
const FooterData = () => {
  return (
    <div className="bg-gray-100 md:py-12 py-8">
      <div className="mx-auto w-11/12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 sm:gap-16 gap-8">
        <div>
          <h2 className="text-2xl font-medium">Shop</h2>
          <div className="border-b-[1px] w-[50px] mt-2 mb-4 border-black"></div>
          <Link
            to="/shop/category/new-product"
            className="text-lg py-3 hover:text-[#73841b]"
          >
            New Products
          </Link>
          <br />
          <Link
            to="/shop/category/best-seller-product"
            className="text-lg py-3 hover:text-[#73841b]"
          >
            Best Selling Products
          </Link>
          <br />
          <Link
            to="/shop/category/best-seller-product"
            className="text-lg py-3 hover:text-[#73841b]"
          >
            Special Products
          </Link>
          <br />
          <Link
            to="/shop/category/featured-product"
            className="text-lg py-3 hover:text-[#73841b]"
          >
            Featured Products
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Quick Links</h2>
          <div className="border-b-[1px] w-[50px] mt-2 mb-4 border-black"></div>
          <Link to="/about" className="text-lg py-3 hover:text-[#73841b]">
            About Us
          </Link>
          <br />
          <Link to="/shop" className="text-lg py-3 hover:text-[#73841b]">
            Shop
          </Link>
          <br />
          <Link to="/contact" className="text-lg py-3 hover:text-[#73841b]">
            Contact Us
          </Link>
          <br />
          <Link to="/categories" className="text-lg py-3 hover:text-[#73841b]">
            Popular Categories
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-medium">My Account</h2>
          <div className="border-b-[1px] w-[50px] mt-2 mb-4 border-black"></div>
          <Link to="/cart" className="text-lg py-3 hover:text-[#73841b]">
            Cart
          </Link>
          <br />
          <Link to="/wishlist" className="text-lg py-3 hover:text-[#73841b]">
            Wishlist
          </Link>
          <br />
          <Link to="/checkout" className="text-lg py-3 hover:text-[#73841b]">
            Checkout
          </Link>
          <br />
          <Link to="/my-account" className="text-lg py-3 hover:text-[#73841b]">
            My Account
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Follow Us</h2>
          <div className="border-b-[1px] w-[50px] mt-2 mb-4 border-black"></div>
          <div className="py-[1px] hover:text-[#73841b]">
            <FontAwesomeIcon className="text-sm" icon={faPhone} />
            <a className="text-lg pl-1" href="tel:03024464106">
              +92 3024464106
            </a>
          </div>
          <div className="py-[1px] hover:text-[#73841b]">
            <FontAwesomeIcon className="text-sm" icon={faPhone} />
            <a className="text-lg pl-1" href="tel:03024464106">
              (646) 968-0708
            </a>
          </div>
          <div className="py-[1px] hover:text-[#73841b]">
            <FontAwesomeIcon className="text-sm" icon={faEnvelope} />
            <a className="text-lg pl-1" href="mailto:Zohaibattari106@gmail.com">
              Zohaibattari106@gmail.com
            </a>
          </div>
          <div className="py-[1px] hover:text-[#73841b]">
            <FontAwesomeIcon className="text-sm" icon={faLocationArrow} />
            <a className="text-lg pl-1" href="#">
              1201 Broadway Suite 600
            </a>
          </div>
        </div>
      </div>
      <img className="md:w-1/2 w-2/3 mx-auto my-4" src={trust} alt="Trust_image" />
    </div>
  );
};

export default FooterData;

