import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    const {
      _id,
      productImg,
      productPrice,
      productDesc,
      productName,
      inCart,
      count
    } = this.props.product;
    return (
      <div>
        <ProductConsumer>
          {value => (
            <div
              className="card shadow-sm"
              // onClick= {() => {
              //   value.handleDetail(_id)
              // }}
            >
              <Link to={`/details/${_id}`}>
                <img className="card-img-top image " src={productImg} alt="" />
              </Link>
              <div className="card-body">
                <h4 className="card-title">{productName}</h4>
                {/* <p className="card-text">{productDesc}</p> */}
                <div className="row">
                  <div className="col-7">
                    {inCart == true ? (
                      <div>
                        <button
                        className="btn product-btn"
                      >
                        <span className="mr-2">
                          <i className="fas fa-cart-plus" />
                        </span>
                        <span>ADDED</span>
                      </button>
                      <button
                        className="btn"
                        style={{ backgroundColor: "#10171E", color: "white" }}
                        onClick={() => {
                          value.increaseQuantity(_id);
                        }}
                      >+</button>
                      <button className="btn">{count}</button>
                      </div>
                    ) : (
                      <button
                        className="btn"
                        style={{ backgroundColor: "#10171E", color: "white" }}
                        onClick={() => {
                          value.addToCart(_id);
                        }}
                      >
                        <span>
                          <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                          </span>
                          <span>CART</span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="col-5">
                    <h5>₦ {productPrice}</h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
