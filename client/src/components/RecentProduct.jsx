import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class RecentProduct extends Component {
  render() {
    const {
      _id,
      productImg,
      productPrice,
      productDesc,
      productName,
      inCart
    } = this.props.product;
    return (
      <div>
        <ProductConsumer>
          {value => (
            <div className="card">
              <Link to={`/details/${_id}`}>
                <img className="card-img-top image " src={productImg} alt="" />
              </Link>
              <div className="card-body">
                <h4 className="card-title">{productName}</h4>
                <div className="row">
                  <div className="col-6">
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
