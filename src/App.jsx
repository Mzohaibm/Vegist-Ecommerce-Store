import { Route, Routes } from "react-router-dom";
import Context from "./Common/Context/Context";
import Home from "./Components/Pages/Home/Home";
import OurSingleProduct from "./Components/Components/OurSingleProduct";
import TrendingSingleProduct from "./Components/Components/TrendingProducts/TrendingSingleProduct";
import About from "./Components/Pages/About/About";
import Shop from "./Components/Pages/Shop/Shop";
import Contact from "./Components/Pages/Contact/Contact";
import Categories from "./Components/Pages/Categories/Categories";
import MyAccount from "./Components/Pages/MyAccount/MyAccount";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import Cart from "./Common/Cart/Cart";
import Wishlist from "./Common/Wishlist/Wishlist";
import NewProduct from "./Components/Pages/Categories/NewProduct";
import SpecialProduct from "./Components/Pages/Categories/SpecialProduct";
import BestSeller from "./Components/Pages/Categories/BestSeller";
import FeaturedProduct from "./Components/Pages/Categories/FeaturedProduct";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/new-product" element={<NewProduct />} />
          <Route
            path="/shop/category/best-seller-product"
            element={<BestSeller />}
          />
          <Route
            path="/shop/category/special-product"
            element={<SpecialProduct />}
          />
          <Route
            path="/shop/category/featured-product"
            element={<FeaturedProduct />}
          />
          <Route
            path="/shop/category/new-product/:id"
            element={<OurSingleProduct />}
          />
          <Route
            path="/shop/category/special-product/:id"
            element={<OurSingleProduct />}
          />
          <Route
            path="/shop/category/featured-product/:id"
            element={<OurSingleProduct />}
          />
          <Route
            path="/shop/category/best-seller-product/:id"
            element={<OurSingleProduct />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop/our-product/:id" element={<OurSingleProduct />} />
          <Route
            path="/shop/trending-product/:id"
            element={<TrendingSingleProduct />}
          />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App;
