import React from "react";

// COMPONENTS
import {
  Navbar,
  Categories,
  Popular,
  Outdoor,
  Indoor,
  Weekend,
  Free,
  Banner,
  Footer,
} from "../../components";

const HomePage = () => {
  return (
    <div className="bg-bannerText">
      <Navbar />
      <div className="px-28">
        <Categories />
      </div>
      <Popular />
      <Outdoor />
      <Indoor />
      <Weekend />
      <Free />

      <div className="flex justify-center items-center my-12">
        <button
          className="py-3 px-8 bg-showMore rounded-[30px] text-cardDetails
        font-[700] font-VAGRounded
        "
        >
          Show more
        </button>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default HomePage;
