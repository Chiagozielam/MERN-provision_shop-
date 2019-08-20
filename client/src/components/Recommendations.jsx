import React, { Component } from "react";
import Axios from "axios";
import Product from "./Product"
import { ProductConsumer } from "../context";

class Recommendations extends Component {
  state = {
    recommended: [],
    productCategoryItems: []
  };

  componentDidMount() {
    let category = this.props.category;
    category = {productCategory: category}

    Axios.post("http://localhost:5000/recommendations", category)
    .then(res => {
      console.log(res)
        let dataObj = [];
          let data = res;
          data.data.forEach(item => {
            const singleItem = { ...item };
            dataObj = [...dataObj, singleItem];
          });
          this.setState(() => {
            return { recommended: dataObj };
          });
        console.log(this.state.recommended)
    })
    .catch(err =>
      console.log(`recommendations weren\'t successfully fetched ${err}`));
  }

  render() {
    return (
      <div>
        <div className="row">
        {
            this.state.recommended.map( product => {
                return <div className="col-sm-10 col-ml-4 col-lg-3">
               <ProductConsumer>
                {
                  value => {
                    return <Product key={product._id} product={product} />
                  }
                }
               </ProductConsumer>
              </div>
            })
        }
        </div>
      </div>
    );
  }
}

export default Recommendations;
