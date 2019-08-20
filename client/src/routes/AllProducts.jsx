import React, { Component } from "react";
import SideNav from "../components/SideNav";
import SearchBar from "../components/searchBar";
import { ProductConsumer } from "../context";
import {Pagination, Badge} from 'react-bootstrap'
import Product from "../components/Product";
import RecentProduct from "../components/RecentProduct";
export default class MainPage extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-10 col-ml-3 col-lg-2 d-sm-none d-md-block d-none">
            <SideNav />
          </div>
          <div className="col-sm-10 col-ml-3 col-lg-9 main-box">
            <SearchBar />
            <div>
              <div
                className="card shadow"
                style={{ margin: "2% auto", padding: "2%" }}
              >
                <div className="cart-title">
                <h3>
                  <Badge variant="secondary">New</Badge>
                </h3>
                </div>
                <div className="row">
                  <ProductConsumer>
                    {value => {
                      return value.recentProducts.map(product => {
                        return (
                          <div className="col-sm-1 col-ml-4 col-lg-3">
                            <RecentProduct
                              key={product._id}
                              product={product}
                            />
                          </div>
                        );
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
                
              <h5>All Our Products</h5>
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.allProducts.map(product => {
                      return (
                        <div className="col-sm-10 col-ml-4 col-lg-3">
                          <Product key={product._id} product={product} />
                        </div>
                      );
                    });
                  }}
                </ProductConsumer>
              </div>
              <div className="mt-5 mb-5 center pagination">
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item disabled>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// onClick={e => {
//   e.preventDefault();
//   const { productName, productPrice } = item;
//   let inCart = { productName, productPrice };
//   inCart = { inCart };
//   this.setState({ cart: inCart });
// }}
