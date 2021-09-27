import React from "react";
import { Link } from "react-router-dom";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>SELECTION BY NAME</h2>
          </div>
          <div className="col-lg-3">
            <h3>Electronics</h3>
            <ul>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>Jewelery Collection</h3>
            <ul>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>Men's Clothing</h3>
            <ul>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>Women's Clothing</h3>
            <ul>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
              <li>
                <Link to="">Mixed Use</Link>
              </li>
            </ul>
          </div>

          <hr />
          <div className="col-lg-3">
            <ul>
              <li>
                <h3>ARTICLES</h3>
              </li>
              <li>
                <h3>PODCASTS</h3>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul>
              <li>
                <h3>VIDEOS</h3>
              </li>
              <li>
                <h3>PHOTOS</h3>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <ul>
              <li>
                <span>SUBSCRIBE</span>
              </li>
              <li>
                <p>FOLLOW US</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="social_icons_wrap">
              <span>
                <Link to="/www.facebook.com"></Link><i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </div>
          </div>
          <hr />
          <div className="rights">
            <p>© 2021 eCommerce: All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
