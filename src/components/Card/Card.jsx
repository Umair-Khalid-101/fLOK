import React from "react";

const Card = ({ title, date, location, price, description, image }) => {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow
    overflow-hidden"
    >
      <a>
        <img className="overflow-hidden h-52 w-full" src={image} alt="image" />
      </a>
      <div className="p-8">
        <h1
          className="font-VAGRounded font-[600]
        my-8
        "
        >
          {title}
        </h1>

        <p className="text-[14px] text-cardDetails">Date: {date}</p>
        <p className="text-[14px] text-cardDetails">Location: {location}</p>
        <p className="text-[14px] text-cardDetails">Price: {price}</p>
        <p className="text-[14px] text-cardDetails mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
