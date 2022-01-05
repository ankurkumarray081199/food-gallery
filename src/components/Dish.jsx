import React, { useState } from "react";
import { Data } from "./Data";
import DishMenu from "./DishMenu";
import DishTab from "./DishTab";
const catTab = ["All", ...new Set(Data.map((val) => val.category))];
// console.log(catTab);

const Dish = () => {
  const [dishData, setDishData] = useState(Data);
  // const [catData, setCatData] = useState([catTab]);
  // console.log("use state" + catData);

  const filterfnc = (cat) => {
    if (cat === "All") {
      setDishData(Data);
    } else {
      const updateDish = Data.filter((val) => {
        return val.category === cat;
      });
      setDishData(updateDish);
    }
  };
  return (
    <>
      <div className="mt-3 border-danger border-bottom">
        <h1 className="text-center fw-normal text-danger text-capitalize">
          Order your favourite dish here
        </h1>
      </div>
      <DishTab filterfnc={filterfnc} catData={catTab} />
      <DishMenu dishData={dishData} />
    </>
  );
};

export default Dish;
