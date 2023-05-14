import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./VendorList.css"

function VendorList() {
  const [stylelist, setStyleList] = useState("vendors-list-18");
  const [stylecard, setStyleCard] = useState("vendor-card");
  const [service, setService] = useState([]);

  const toggleList = () => {
    setStyleList("vendors-list-18-list");
    setStyleCard("vendor-card-list-18");
  };

  const toggleGrid = () => {
    setStyleList("vendors-list-18");
    setStyleCard("vendor-card");
  };


  return (
    <>
      {/* sub navbar */}

      <div className="container mt-3">
        <div className="row bg-light mx-1 navbar-vendorlist">
          <div className="col-7 mt-1">
            <a class="navbar-brand">Categories</a>

          </div>

          <div
            className="toggle-grid-18 col-1 d-flex justify-content-end align-items-end mt-2"
            onClick={toggleGrid}
          >
            <i class="fa-solid fa-grip fa-lg"></i>
          </div>

          <div
            className="toggle-list-18 col-1 d-flex justify-content-end align-items-end mt-2"
            onClick={toggleList}
          >
            <i class="fa-solid fa-list  fa-lg"></i>
          </div>


        </div>
        <div className={stylelist}>

          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Mumbai</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>
          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Pune</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>

          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Chandigarh</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>


          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Jalandhar</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>

          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Una</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>

          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Amb</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>

          <div class={stylecard}>
            <div className="vendor-card-image">
              <img src="https://images.pexels.com/photos/949582/pexels-photo-949582.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>

            <div class="vendor-card-info">
              <h3 class="vendor-card-name">

                Blossom Decoration Services
              </h3>
              <p class="vendor-card-description">Best Decoration in your place</p>
              <div class="vendor-card-location">
                <img
                  src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                  alt="Location icon"
                />
                <p class="vendor-card-location-text">Delhi</p>
              </div>
              <div class="vendor-card-rating">
                <i class="fa-solid fa-star"> </i>
                <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
              </div>
              <div class="vendor-card-pricing">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p class="vendor-card-pricing-text">25000</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}

export default VendorList;