import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import allActions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../assets/Details.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Details = () => {
    const dispatch = useDispatch();
  let query = useQuery();
  const singlePost = useSelector((state) => state.SinglePostReducer);
  console.log("Nya = ", singlePost.postItems)

  useEffect(() => {
    dispatch(allActions.singlePostActions.fetchSinglePost(query.get("id")))
  }, []);
  return (
    <div className="details_wrap">
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 offset-1">
            <img src={singlePost.postItems.image} alt="Loading" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="content_wrap">
              <h3>{singlePost.postItems.title}</h3>
              <span><i className="fa fa-star" aria-hidden="true"></i></span>
              <span><i className="fa fa-star" aria-hidden="true"></i></span>
              <span><i className="fa fa-star" aria-hidden="true"></i></span>
              <span><i className="fa fa-star" aria-hidden="true"></i></span>
              <span><i className="fa fa-star" aria-hidden="true"></i></span>
              <span className="customer_reviews">( Customer Reviews)</span>
              <p>{singlePost.postItems.description}</p>
              <p><span>Price: ${singlePost.postItems.price}</span></p>
              <p><button className="addtocart"><Link to="/">Add to Cart  </Link><i className="fas fa-shopping-cart"></i></button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
