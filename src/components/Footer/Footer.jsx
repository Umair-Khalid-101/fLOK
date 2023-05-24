import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { US } from "country-flag-icons/react/3x2";
import Chat from "../../assets/Chat.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 place-items-center py-12">
      <div className="flex flex-col ml-12">
        <h1 className="font-VAGRounded text-[28px]">
          Enjoy 15% off your first order
        </h1>
        <p className="font-footerText">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <form>
          <div className="relative mt-4 flex justify-start">
            <input
              type="search"
              id="default-search"
              className="block w-[60%] p-4 pl-10 text-sm text-gray-900 border border-gray-300
                  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-md outline-none"
              placeholder="your@address.com"
            />
            <button
              type="submit"
              className="text-white absolute right-[260px] bottom-2.5 bg-black 
                  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                  text-sm px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>

        <div
          className="flex justify-start items-center mt-4
            gap-8
            "
        >
          <AiFillFacebook className="text-black h-6 w-6" />
          <AiFillInstagram className="text-black h-6 w-6" />
          <AiFillYoutube className="text-black h-6 w-6" />
          <AiFillTwitterCircle className="text-black h-6 w-6" />
        </div>
      </div>

      <div>
        <h1 className="font-VAGRounded">CALL US</h1>
        <div
          className="flex justify-between items-center my-4 text-footerText
            gap-6"
        >
          <p>+44 330 022 5700</p>
          <p>Amet minim mollit non deserunt</p>
        </div>
        <h1 className="font-VAGRounded">Location & Language</h1>
        <div className="flex justify-start items-center mt-4 gap-2">
          <US title="United States" className="h-8 w-8" />.<h2>English</h2>
        </div>
        <div className="flex relative">
          <button
            className="bg-black text-white px-[100px] py-3  
            rounded-[16px] ml-[200px] mt-[20px]
          "
          >
            Chat to an expert
          </button>
          <img
            src={Chat}
            alt="chat"
            className="w-6 h-6 absolute
          right-[20px] top-[32px]
          "
          />
          <p
            className="text-green-500 font-bold text-[80px]
          absolute right-[260px] -top-[45px]
          "
          >
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
