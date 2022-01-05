import React from "react";
import { NavLink } from "react-bootstrap";

export const DishCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-10 mx-auto">
        <div className="card dish_card mb-4">
          <div className="row gy-0">
            <div className="col-12 col-md-12  col-lg-5 ankur">
              <img
                src={props.image}
                className="img-fluid dish_Image"
                alt={props.name}
              />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="card-body">
                <h3 className="card-title"> {props.name}</h3>
                <p className="card-text">Category: {props.category}</p>

                <p className="card-text">
                  <small className="text-muted">
                    Recipe :{props.description}
                  </small>
                </p>
                <div className="row">
                  <div>Price:{props.price}</div>
                  <div>
                    <NavLink
                      to="#"
                      className="btn btn-sm text-dark mt-2 btn-outline-warning text-center"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
