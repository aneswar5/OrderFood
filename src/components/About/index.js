import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="main_about">
      <div className="child1">
        <div className="row container">
          <div className="col-6 para">
            <h3>About Us</h3>
            <h1>Welcome to food order</h1>
            <p>
              Tasty Shop has some pretty cool and different recipes, that look
              delicious! Aside from that, you can purchase their products like
              cookware, bake ware and utensils in vibrant color choices.
            </p>
            <div className="about_button">
              <button href="" className="button inner_button">
                Read More
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about_img">
              <img className="about_image"
                src="https://img.freepik.com/free-photo/assorted-indian-recipes-food-various_79295-7226.jpg?size=626&ext=jpg"
                alt="tasty"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
