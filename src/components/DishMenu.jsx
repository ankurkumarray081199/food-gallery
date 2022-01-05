import React from "react";
import { DishCard } from "./DishCard";
const DishMenu = ({ dishData }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 p-0 col-md-10 mx-auto mt-5">
            <div className="row p-0 ">
              {dishData.map((val, indx) => {
                const { image, name, category, price, description } = val;
                return (
                  <DishCard
                    key={indx}
                    image={image}
                    name={name}
                    category={category}
                    price={price}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishMenu;
