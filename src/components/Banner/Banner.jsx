import React from "react";

// SVGs
import { Airplay, Bell, Emoji, Event } from "../../assets/Banner";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-4 bg-black
    text-white  h-[300px]
    py-8 px-8
    "
    >
      <div
        className="flex flex-col
      justify-start items-center
      gap-2 w-[90%]
      "
      >
        <img src={Event} alt="event" className="h-8 w-8 text-bannerText" />
        <h1 className="font-VAGRounded font-[700] text-bannerText">
          CREATE YOUR OWN EVENT
        </h1>
        <p
          className="font-VAGRounded text-[14px] text-bannerText
        font-thin
        "
        >
          Want to host a local event? Create your own!
        </p>
      </div>
      <div
        className="flex flex-col
      justify-start items-center
      gap-2 w-[90%]"
      >
        <img src={Bell} alt="bell" className="h-8 w-8" />
        <h1 className="font-VAGRounded font-[700] text-bannerText">
          JOIN TO GET NOTIFIED OF INTERESTS
        </h1>
        <p
          className="font-VAGRounded text-[14px] text-bannerText
        font-thin
        "
        >
          Stay up to date on new events that you want your kids to be the first
          to go to.
        </p>
      </div>
      <div
        className="flex flex-col
      justify-start items-center
      gap-2 w-[90%]"
      >
        <img src={Airplay} alt="airplay" className="h-8 w-8" />
        <h1 className="font-VAGRounded font-[700] text-bannerText">
          SIMPLIFY YOUR ORGANIZATION EVENTS
        </h1>
        <p
          className="font-VAGRounded text-[14px] text-bannerText
        font-thin
        "
        >
          Let Flok handle your bookings, registrations, and payment collection.
          Simplify your business so that you can focus on what you do best.
        </p>
      </div>
      <div
        className="flex flex-col
      justify-start items-center
      gap-2 w-[100%]"
      >
        <img src={Emoji} alt="emoji" className="h-8 w-8" />
        <h1 className="font-VAGRounded font-[700] text-bannerText">
          WE CARE ABOUT OUR CHILDREN
        </h1>
        <p className="font-VAGRounded text-[14px] text-bannerText">
          We are parents too, so we care about what our children are doing. Our
          mission is to protect our children while giving them a place to learn,
          make mistakes and grow as part of the community.
        </p>
      </div>
    </div>
  );
};

export default Banner;
