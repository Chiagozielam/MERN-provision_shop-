import React, { Component } from "react";
import SideNav from "../components/SideNav";
import SearchBar from "../components/searchBar";
import { ProductConsumer } from "../context";
import Product from "../components/Product";
export default class CocoProducts extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-ml-3 col-lg-2">
          <SideNav />
        </div>
        <div className="col-sm-10 col-ml-3 col-lg-9 main-box">
          <SearchBar />
          <div className="mt-5 mb-3">
            <h5>All Coco Products</h5>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.cocoProducts.map(product => {
                    return (
                      <div className="col-sm-10 col-ml-4 col-lg-3">
                        <Product key={product._id} product={product} />
                      </div>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
