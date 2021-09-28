import React from "react";
import Loader from "react-js-loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../assets/Card.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const Card = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.PostReducers);
  
  useEffect(() => {
    dispatch(allActions.postActions.fetchPosts());
  }, []);
  
  const handleCart = (id) =>{
    dispatch(allActions.cartActions.fetchCart(id));
  }

  return (
    <div className="container">
      <div className="row mb-5">
        {allProducts != null ? (
          allProducts.productItems.map((item, index) => {
            return (
              <div className="col-lg-3 card_wrap" key={index}>
                <div className="image_wrap">
                  <img src={item.image} className="img-fluid" alt="loading" />
                </div>
                <div className="card_content">
                  <h3>${item.price}</h3>
                  <button
                    type="button"
                    onClick={() =>  handleCart(item.id)}
                    className="cart-btn"
                  >
                    Add to Cart<i className="fas fa-shopping-cart"></i>
                  </button>
                  <span>
                    <button className="details_btn">
                      <Link to={`/details?id=${item.id}`}>Details</Link>
                    </button>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className={"row"}>
            <div className={"item"}>
              <Loader
                type="spinner-cub"
                bgColor={"#ed7a23"}
                color={"#ed7a23"}
                size={100}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
