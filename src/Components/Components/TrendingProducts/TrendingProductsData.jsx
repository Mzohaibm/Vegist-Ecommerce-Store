// trending Products
import TrendingProduct1_1 from "../../../assets/NewProducts/product1_1.jpg";
import TrendingProduct1_2 from "../../../assets/NewProducts/product1_2.jpg";
import TrendingProduct1_3 from "../../../assets/NewProducts/product1_3.jpg";
import TrendingProduct2_1 from "../../../assets/NewProducts/Product2_1.webp";
import TrendingProduct2_2 from "../../../assets/NewProducts/Product2_2.webp";
import TrendingProduct2_3 from "../../../assets/NewProducts/Product2_3.jpg";
import TrendingProduct3_1 from "../../../assets/NewProducts/Product3_1.jpg";
import TrendingProduct3_2 from "../../../assets/NewProducts/Product3_2.jpg";
import TrendingProduct3_3 from "../../../assets/NewProducts/Product3_3.jpg";
import TrendingProduct4_1 from "../../../assets/NewProducts/Product4_1.jpg";
import TrendingProduct4_2 from "../../../assets/NewProducts/Product4_2.jpg";
import TrendingProduct4_3 from "../../../assets/NewProducts/Product4_3.jpg";
import TrendingProduct5_1 from "../../../assets/NewProducts/Product5_1.jpg";
import TrendingProduct5_2 from "../../../assets/NewProducts/Product5_2.jpg";
import TrendingProduct5_3 from "../../../assets/NewProducts/Product5_3.jpg";
import TrendingProduct6_1 from "../../../assets/NewProducts/Product6_1.jpg";
import TrendingProduct6_2 from "../../../assets/NewProducts/Product6_2.webp";
import TrendingProduct6_3 from "../../../assets/NewProducts/Product6_3.jpg";
import TrendingProduct7_1 from "../../../assets/SpecialProducts/Special1_1.jpg";
import TrendingProduct7_2 from "../../../assets/SpecialProducts/Special1_2.jpg";
import TrendingProduct7_3 from "../../../assets/SpecialProducts/Special1_3.jpg";
import TrendingProduct8_1 from "../../../assets/SpecialProducts/Special2_1.jpg";
import TrendingProduct8_2 from "../../../assets/SpecialProducts/Special2_2.jpg";
import TrendingProduct8_3 from "../../../assets/SpecialProducts/Special2_3.jpg";
import TrendingProduct9_1 from "../../../assets/SpecialProducts/Special3_1.webp";
import TrendingProduct9_2 from "../../../assets/SpecialProducts/Special3_2.webp";
import TrendingProduct9_3 from "../../../assets/SpecialProducts/Special3_3.webp";

const TrendingProductsData = [
  {
    id: 1,
    productName: "Fresh apple",
    weight: 5,
    price: 14,
    discount: 30,
    oldPrice: 18,
    availability: 2,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Apple",
    image1: TrendingProduct1_1,
    image2: TrendingProduct1_2,
    image3: TrendingProduct1_3,
    type: "TrendingProduct",
    productType: "Fruit",
  },
  {
    id: 2,
    productName: "Sp. red fresh guava",
    weight: 5,
    price: 14,
    discount: 30,
    oldPrice: 18,
    availability: 4,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Apple",
    image1: TrendingProduct2_1,
    image2: TrendingProduct2_2,
    image3: TrendingProduct2_3,
    type: "TrendingProduct",
    productType: "Fruit",
  },
  {
    id: 3,
    productName: "Fresh mussel (500g)",
    weight: 5,
    price: 14,
    discount: 30,
    oldPrice: 18,
    availability: 6,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Apple",
    image1: TrendingProduct3_1,
    image2: TrendingProduct3_2,
    image3: TrendingProduct3_3,
    type: "TrendingProduct",
    productType: "Fruit",
  },
  {
    id: 4,
    productName: "Fresh seafood",
    weight: 5,
    price: 14,
    discount: 30,
    oldPrice: 18,
    availability: 6,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Seafood",
    image1: TrendingProduct4_1,
    image2: TrendingProduct4_2,
    image3: TrendingProduct4_3,
    type: "TrendingProduct",
    productType: "Fish",
  },
  {
    id: 5,
    productName: "Organic blueberries",
    weight: 5,
    price: 14,
    discount: 30,
    oldPrice: 18,
    availability: 6,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Blueberries",
    image1: TrendingProduct5_1,
    image2: TrendingProduct5_2,
    image3: TrendingProduct5_3,
    type: "TrendingProduct",
    productType: "Fruit",
  },
  {
    id: 6,
    productName: "Fresh dryed almod (50g)",
    weight: 5,
    price: 16,
    discount: 40,
    oldPrice: 26,
    availability: 19,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "almond",
    image1: TrendingProduct6_1,
    image2: TrendingProduct6_2,
    image3: TrendingProduct6_3,
    type: "SpecialProduct",
    productType: "Fruit",
  },
  {
    id: 7,
    productName: "Vegetable tomato",
    weight: 5,
    price: 12,
    discount: 22,
    oldPrice: 16,
    availability: 8,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "tomato",
    image1: TrendingProduct7_1,
    image2: TrendingProduct7_2,
    image3: TrendingProduct7_3,
    type: "SpecialProduct",
    productType: "vegetable",
  },
  {
    id: 8,
    productName: "Fresh grassben",
    weight: 5,
    price: 11,
    discount: 40,
    oldPrice: 16,
    availability: 11,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "grassben",
    image1: TrendingProduct8_1,
    image2: TrendingProduct8_2,
    image3: TrendingProduct8_3,
    type: "SpecialProduct",
    productType: "vegetable",
  },
  {
    id: 9,
    productName: "Orange juice natural",
    weight: 4,
    price: 16,
    discount: 33,
    oldPrice: 22,
    availability: 6,
    size: 2,
    secondSize: 3,
    sku: 12345,
    tag: "Orange",
    image1: TrendingProduct9_1,
    image2: TrendingProduct9_2,
    image3: TrendingProduct9_3,
    type: "SpecialProduct",
    productType: "Fruit",
  },
];
export default TrendingProductsData;
