import React, { Component } from "react";
import PropertyCard from "./property-card-sale";
import axios from "axios";
class PropertyGridForSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SaleProperties: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/SalePropertyDetail/")
      .then((response) => {
        if (response.data) {
          this.setState({
            SaleProperties: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="blog-page-area pt-5 go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="product-search-inner bg-main">
                <div className="row custom-gutters-20">
                  <div className="col-md-3 align-self-center">
                    <h5>{this.state.SaleProperties.length} Properties</h5>
                  </div>
                  <div className="col-md-6 mt-2 mt-md-0">
                    <div className="widget-search">
                      <div className="single-search-inner">
                        <input type="text" placeholder="Search your keyword" />
                        <button>
                          <i className="la la-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mt-2 mt-md-0 align-self-center">
                    <div className="single-select-inner">
                      <select>
                        <option value={1}>Sort By</option>
                        <option value={2}>Sort By</option>
                        <option value={3}>Sort By</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.SaleProperties.map((property) => {
              return (
                <PropertyCard
                  key={Math.random()}
                  PropertyId={property._id}
                  PropertyTitle={property.PropertyTitle}
                  PropertyTagline={property.PropertyTagline}
                  Address={property.Address}
                  City={property.City}
                  Price={property.Price}
                  MainImage={property.MainImage}
                  Bedrooms={property.Bedrooms}
                  Bathrooms={property.Bathrooms}
                  AreaSqFt={property.AreaSqFt}
                  Owner={property.Owner}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyGridForSale;
