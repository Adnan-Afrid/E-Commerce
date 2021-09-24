import React from "react";
import { Link } from "react-router-dom";
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>SELECTION BY NAME</h2>
          </div>
          <div className="col-lg-3">
            <h3>Sport's Collection</h3>
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
            <h3>Electronic's</h3>
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
            <h3>Jwellery Collection</h3>
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
            <h3>Kid's Collection</h3>
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
              <li>
                <h3>POLLS</h3>
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
              <Link to="">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link to="">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fa fa-youtube-play"></i>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
