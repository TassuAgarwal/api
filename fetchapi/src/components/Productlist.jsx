import React from "react";
import './index.css';
const Productlist = (props) => {
  return (

    <>
      {/* <div className="row"> */}
      <div className="col">
        <div className="product-card">
          <div className="badge">{props.id}</div>
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
                <div className="product-rating">
                  <span>{props.rating?.rate}/5</span><br />
                  <span>{props.rating?.count}</span>
                </div>
                <a href=""></a>
                <a href=""></a>
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