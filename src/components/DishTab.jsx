import React from "react";

const DishTab = ({ filterfnc, catData }) => {
  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-around">
          {catData.map((val, indx) => {
            return (
              <button
                className="btn btn-primary"
                key={indx}
                onClick={() => filterfnc(val)}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DishTab;
