import React from "react";
import "../assets/Cart.css";

const Items = (props) => {
  return (
    <div className="item_wrap">
      <div className="items-info">
        <div className="product-img">
          <img src={props.imagee} alt="Loading" />
        </div>

        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" />
          <i className="fas fa-plus add"></i>
        </div>

        <div className="price">
          <h3>{props.price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Items;
