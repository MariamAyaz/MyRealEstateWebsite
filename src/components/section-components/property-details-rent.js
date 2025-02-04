import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PropertyDetailsRent = () => {
  const location = useLocation();
  const data = location.state;
  let publicUrl = process.env.PUBLIC_URL + "/";

  const [propertyData, getpropertyData] = useState("");

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = () =>
    axios
      .get(
        "http://localhost:5000/RentPropertyDetail/property-details-rent/" +
          data,
        {}
      )
      .then((res) => {
        const allPropertyData = res.data;
        // console.log(allPropertyData);
        // return res.data;
        getpropertyData(allPropertyData);
      });

  // console.log(propertyData);

  return (
    <div className="property-page-area pd-top-120 pd-bottom-90 ">
      <div className="container">
        <div className="property-details-top pd-bottom-70">
          <div className="property-details-top-inner">
            <div className="row">
              <div className="col-lg-7">
                <h3>PropertyTitle</h3>
                <p>
                  <img
                    src={publicUrl + "assets/img/icon/location2.png"}
                    alt="img"
                  />{" "}
                  New York 261, Sam Road, Right Side real estate{" "}
                </p>
                <ul>
                  <li>3 Bedroom</li>
                  <li>Bathroom</li>
                  <li>1026 sqft</li>
                </ul>
              </div>
              <div className="col-lg-5 text-lg-right">
                <h4>$ 80,650.00</h4>
                <div className="btn-wrap">
                  <a className="btn btn-blue btn-sm" href="#">
                    BUILD
                  </a>
                  <a className="btn btn-blue btn-sm" href="#">
                    SALE
                  </a>
                  <a className="btn btn-base btn-sm" href="#">
                    RENT
                  </a>
                </div>
                <ul>
                  <li>
                    <img src={publicUrl + "assets/img/icon/1.png"} alt="img" />
                    Marce 9 , 2020
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-thumbnail-wrapper">
            <div className="single-thumbnail-slider">
              <div className="slider-item">
                <img
                  src={publicUrl + "assets/img/project-single/1.png"}
                  alt="img"
                />
              </div>
              <div className="slider-item">
                <img
                  src={publicUrl + "assets/img/project-single/2.png"}
                  alt="img"
                />
              </div>
              <div className="slider-item">
                <img
                  src={publicUrl + "assets/img/project-single/3.png"}
                  alt="img"
                />
              </div>
              <div className="slider-item">
                <img
                  src={publicUrl + "assets/img/project-single/4.png"}
                  alt="img"
                />
              </div>
              <div className="slider-item">
                <img
                  src={publicUrl + "assets/img/project-single/5.png"}
                  alt="img"
                />
              </div>
            </div>
            <div className="product-thumbnail-carousel">
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/1.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/2.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/3.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/4.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/5.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/2.png"}
                  alt="img"
                />
              </div>
              <div className="single-thumbnail-item">
                <img
                  src={publicUrl + "assets/img/project-single/3.png"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row go-top">
          <div className="col-lg-8">
            <div className="single-property-details-inner">
              <h4>Daily Apartment</h4>
              <p>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                consectetuLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore.{" "}
              </p>
              <div className="single-property-grid">
                <h4>Poperty Details</h4>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li>Bedrooms: 3</li>
                      <li>Livingroom: 2</li>
                      <li>Type: Private House</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>Bathrooms: 3</li>
                      <li>Total Rooms: 12</li>
                      <li>Year Built: 2020</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>Kitchen: 2</li>
                      <li>Area: 1258</li>
                      <li>Owner: XYZ</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-property-grid">
                <h4>Amenities</h4>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        Air Conditionar
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Fencing
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Internet
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        Wardrobes
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        School
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Park
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        Dishwasher
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Floor Covering
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        Internet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-property-grid">
                <h4>Estate Location</h4>
                <div className="property-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget-place">
                <h5 className="widget-title">Place</h5>
                <ul>
                  <li>
                    New York <span>26</span>
                  </li>
                  <li>
                    Love Road <span>20</span>
                  </li>
                  <li>
                    Beach Side <span>21</span>
                  </li>
                  <li>
                    Golden city <span>31</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget-tags">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="tagcloud">
                  <Link to="/blog">Popular</Link>
                  <Link to="/blog">Art</Link>
                  <Link to="/blog">Business</Link>
                  <Link to="/blog">Design</Link>
                  <Link to="/blog">Creator</Link>
                  <Link to="/blog">CSS</Link>
                  <Link to="/blog">Planing</Link>
                  <Link to="/blog">Creative</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailsRent;
