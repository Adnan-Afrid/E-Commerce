import React from "react";
import image from "../../Card/assets/image.png";
import "../assets/Cart.css";
import Items from "./Items";
const item = [
  {
    id: 0,
    imagee: image,
    title: "Cloth",
    description: "Clotht is somehow fit and relax for mens",
    price: "$ 50",
  },
  {
    id: 1,
    imagee: image,
    title: "Shirt",
    description: "Shirt is somehow not fit and relax for mens",
    price: "$ 100",
  },
  {
    id: 2,
    imagee: image,
    title: "Qameez",
    description: "Qameez is somehow fit and relax for mens",
    price: "$ 150",
  },
  {
    id: 3,
    imagee: image,
    title: "Ring",
    description: "Ring is fit and relax for mens",
    price: "$ 120",
  },
];
const Cart = () => {
  return (
    <div className="cart_wrapper">
      <div className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">5</span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>$ 700</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart">Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
