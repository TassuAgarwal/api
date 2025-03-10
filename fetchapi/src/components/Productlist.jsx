import React from "react";
import './index.css';
const Productlist = (props) => {
  return (

    <>
    {/* <div className="row"> */}
      <div className="col">
      <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={props.image} alt="producr" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{props.category}</span>
          <h4><a href="">{props.title}</a></h4>
          <p>{props.desc}</p>
          <div className="product-bottom-details">
            <div className="product-price">${props.price}</div>
            <div className="product-links">
              <a href=""><i className="fa fa-heart"></i></a>
              <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    {/* </div> */}
      
    </>
  )
};

export default Productlist;