import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../assets/Card.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const Card = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.PostReducers);

  useEffect(() => {
    dispatch(allActions.postActions.fetchPosts());
  }, []);

  return (
    <div className="container">
      <div className="row mb-5">
        {postData != null
          ? postData.postItems.map((item, index) => {
              return (
                <div className="col-lg-3 card_wrap" key={index}>
                  <div className="image_wrap">
                    <img src={item.image} className="img-fluid" alt="loading" />
                  </div>
                  <div className="card_content">
                    <h3>${item.price}</h3>
                    <button type="button" className="cart-btn">
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
          : "Loading"}
      </div>
    </div>
  );
};

export default Card;
