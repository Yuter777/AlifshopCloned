import Banner from "@/sections/banner";
import HeaderTitle from "@/sections/headerTitle";
import ProductCategories from "@/sections/productCategories";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <HeaderTitle />
      <Banner />
      <ProductCategories />
    </div>
  );
};

export default Home;
