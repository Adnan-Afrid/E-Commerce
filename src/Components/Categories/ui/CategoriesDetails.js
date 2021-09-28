import { useEffect } from "react";
import Loader from "react-js-loader";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Cart from "../../Cart/ui/Cart";
import "../assets/Categories.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const CategoriesDetails = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categoryReducer);
  const { category } = useParams();

  useEffect(() => {
    dispatch(allActions.categoryActions.fetchCategory(category));
  }, []);

  return (
    <div className="container">
      <div className="row mb-5">
        <h2 className="details_head">Product List</h2>
        {categoryData != null ? (
          categoryData.categoryItems.map((item, index) => {
            return (
              <div className="col-lg-3 card_wrap" key={index}>
                <div className="image_wrap">
                  <img src={item.image} className="img-fluid" alt="loading" />
                </div>
                <div className="card_content">
                  <h3>${item.price}</h3>
                  <button
                    type="button"
                    onClick={() => <Cart item={item} />}
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

export default CategoriesDetails;
