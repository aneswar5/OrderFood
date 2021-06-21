import React from "react";
import Navbar from '../Navbar';
import './style.css';

export default function Menu() {
  return (
    <div className="main_header">
      {/* banner, banner__content, container, banner__text */}
      <Navbar />
      <div className="header_first">
        <div className="child1">
          <div classNames="text_box">
            <h3>Food Delivery</h3>
            <h1>Order Your Food</h1>
            <p>
              No matter what order food is eaten. Digestion begins in the mouth
              by chewing food to break it down. The stomach acids further break
              the food down which passes to the intestines, and nutrients from
              the broken up foods are absorbed and used by the body.
            </p>
            <div className="header_button">
              <button href="#" className="button inner_button">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
