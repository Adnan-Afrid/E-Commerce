import React from "react";
import image from "../../Card/assets/image.png";
import { Link } from "react-router-dom";
import "../assets/Cart.css";
import Items from "./Items";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartReducer);
  const fetchdata = useSelector((state) => state.cartReducer.fetchCart);
  console.log("fetchcart data is ", fetchdata);

  const deleteCartItem = (id) => {
    console.log("item in deleteCartItem fun = ", id);
    dispatch(allActions.cartActions.deleteCartItem(id));

  };

  return (
    <div className="cart_wrapper">
      <div className="main-cart-section">
        <h1>Shopping Cart</h1>
        {fetchdata.map((item, index) => {
          return (
            <div className="item_wrap" key={index}>
              <div className="items-info">
                <div className="product-img">
                  <img src={item.image} alt="Loading" />
                </div>

                <div className="title">
                  <h2>{item.title}</h2>
                </div>

                <div className="add-minus-quantity">
                  <i className="fas fa-minus minus"></i>
                  <input type="text" />
                  <i className="fas fa-plus add"></i>
                </div>

                <div className="price">
                  <h3>$ {item.price}</h3>
                </div>

                <div className="remove-item">
                  <i
                    className="fas fa-trash-alt remove"
                    onClick={() => deleteCartItem(index)}
                  ></i>
                </div>
              </div>

              <hr />
            </div>
          );
        })}
        <div className="card-total">
          <h3>
            Cart Total : <span>$ 700</span>
          </h3>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
          <button className="clear-cart">Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
