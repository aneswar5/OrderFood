import React from 'react'
import './style.css';
const Clients = () => {
    return (
        <div className="main_clients">
            <div className="child1">
                <div className="col-6 para">
                    <h3>About our Clients</h3>
                </div>
               <div className="row">
                    <div className="col-3">
                        <div className="client">
                            <h1>158</h1>
                            <p>Employees</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="client">
                            <h1>91</h1>
                            <p>Food Types</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="client">
                            <h1>1328</h1>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="client">
                            <h1>1988</h1>
                            <p>Delivery</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Clients
