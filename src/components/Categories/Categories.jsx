import React from "react";

// Constants
import { categories } from "../../constants";

// SVGS
import { toDoList, Map } from "../../assets";

const Categories = () => {
  return (
    <>
      {/* // Main Grid */}
      <div
        className="grid grid-cols-5 gap-x-5 gap-y-5
    mt-20
    "
      >
        {categories.map((category) => (
          <div
            key={Math.random()}
            className="bg-white shadow-md
        flex justify-center items-center
        h-12 gap-8 rounded-[8px]
        "
          >
            <img src={category.icon} alt="icon" className="w-6 h-6" />
            <div className="text-categoriesColor font-Poppins font-[600]">
              {category.name}
            </div>
          </div>
        ))}
      </div>
      {/* // Main Grid */}

      {/* TODOLIST AND MAP */}
      <div
        className="flex justify-center items-center
      my-12 gap-4
      "
      >
        <img src={toDoList} alt="todolist" className="w-6 h-6" />
        <img src={Map} alt="map" className="w-6 h-6" />
      </div>
      {/* TODOLIST AND MAP */}
    </>
  );
};

export default Categories;
