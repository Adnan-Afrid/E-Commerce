import React from "react";
import { Link } from "react-router-dom";
import "../assets/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
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
                 <button> <i className="fas fa-minus minus"></i></button>
                  <input type="text" value={1} disabled/>
                  <button><i className="fas fa-plus add"></i></button>
                </div>

                <div className="price">
                  <h3>$ {item.price}</h3>
                </div>

                <div className="remove-item">
                 <button> <i
                    className="fas fa-trash-alt remove"
                    onClick={() => deleteCartItem(index)}
                  ></i></button>
                </div>
              </div>

              <hr />
            </div>
          );
        })}
        <div className="card-total">
          <h3>
            Cart Total : <span>$ 323</span>
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
