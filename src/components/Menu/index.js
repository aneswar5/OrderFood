import React from 'react';
import './style.css';

const Menu = () => {
    return (
        <div className="menu_about">
             <div className="child1">
                <div className="row">
                <div className="col-6">
                        <div className="menu_img">
                            <img className="menu_image" src="https://images.indianexpress.com/2017/07/biryani1.jpg" alt="tasty" />
                        </div>
                    </div>
                    <div className="col-6 para">
                        <h3>Menu</h3>
                        <h1>Choose a plan</h1>
                        <p>A Perfect Plate, is a small company in Charlotte, NC that brings professional chefs to your home to prepare delicious, customized meals. It's a fresh, clean site that feels honest and dependable by incorporating bright backgrounds and friendly imagery.</p>
                        <div className="menu_button">
                            <button href="" className="button inner_button">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
