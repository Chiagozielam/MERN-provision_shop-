import React, { Component } from "react";
import SideNav from "../components/SideNav";
import { ProductConsumer } from "../context";

export default class Cart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-ml-3 col-lg-2">
          <SideNav />
        </div>
        <div className="col-sm-10 col-ml-3 col-lg-9 main-box">
          <div className="cart-container">
            <ProductConsumer>
              {value => {
                return value.cartItems.map(item => {
                  const {
                    _id,
                    productImg,
                    productPrice,
                    productDesc,
                    productName,
                    count,
                    inCart
                  } = item;
                  return (
                    <div
                      className="row"
                      style={{
                        margin: "2%",
                        height: "150px",
                        overflow: "hidden",
                        background: "#10171E"
                      }}
                    >
                      <div
                        className="col-sm-2 col-mb-2 col-lg-2"
                        style={{ height: "150px" }}
                      >
                        <img
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                          src={productImg}
                          alt=""
                        />
                      </div>
                      <div className="col-sm-5 col-mb-3 col-lg-3 cart-val-padding">
                        <h3
                          classname="cart-gradient"
                          style={{
                            height: "150px",
                            background: "#10171E"
                          }}
                        >
                          {productName}
                        </h3>
                      </div>
                      <div className="col-sm-2 col-mb-3 col-lg-3 cart-val-padding">
                        <h4
                          classname="cart-gradient"
                          style={{
                            background: "#10171E"
                          }}
                        >
                          ₦ {productPrice}
                        </h4>
                      </div>

                      <div className="col-sm-1 col-mb-1 col-lg-1 cart-val-padding">
                        <button onClick={value.increaseQuantity}>+</button>
                        <button>-</button>
                      </div>

                      <div className="col-sm-1 col-mb-1 col-lg-1 cart-val-padding">
                        <h4>{count}</h4>
                      </div>
                    </div>
                  );
                });
              }}
            </ProductConsumer>
            <ProductConsumer>
              {value => {
                const checkoutPrice = value.totalPrice;
                return (
                  <div className="cart-summary">
                    <div>
                      <h3 id="cart-total-price">
                        TOTAL PRICE: {checkoutPrice}
                      </h3>
                      <button className="btn btn-primary btn-lg">
                        PROCEED TO PAYMENT
                      </button>
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
