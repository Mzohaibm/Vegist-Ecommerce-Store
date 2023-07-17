
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";
import FreeReturnQuality from "../../Components/FreeReturnQuality/FreeReturnQuality";
import NewsLatter from "../../Components/NewsLatter/NewsLatter";
import OurProducts from "../../Components/OurProducts";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";
import DealsOfDay from "./DealsOfDay";
import FreshOrganicStore from "./FreshOrganicStore";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <FreeReturnQuality />
      <OurProducts />
      <DealsOfDay />
      <TrendingProducts />
      <FreshOrganicStore/>
      <CustomerReviews />
      <NewsLatter />
    </div>
  );
};

export default Home;
