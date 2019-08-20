import React, { Component } from "react";
import SideNav from "../components/SideNav";
import SearchBar from "../components/searchBar";
import Product from "../components/Product";
import { ProductConsumer } from "../context";

export default class DiaryProducts extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-ml-3 col-lg-2">
          <SideNav />
        </div>
        <div className="col-sm-10 col-ml-3 col-lg-9 main-box">
          <SearchBar />
          <div className="mt-5 mb-3">
            <h5>All Diary Products</h5>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.diaryProducts.map(product => {
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
