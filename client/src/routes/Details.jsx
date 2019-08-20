import React, { Component } from "react";
import Button from "../components/Button";
import Axios from "axios";
import Product from "../components/Product";
import Recommendations from '../components/Recommendations'

class Details extends Component {
  state = {
    detail: {}
  };



  componentDidMount() {
    var id = [this.props.match.params.id];
    Axios.post("http://localhost:5000/details", id)
      .then(res => {
        let details = res.data;
        this.setState({ detail: details });
      })
      .catch(err =>
        console.log(`detail product wasn\'t sent successfully ${err}`)
      );
     
  }
  componentDidUpdate() {
    var id = [this.props.match.params.id];
    Axios.post("http://localhost:5000/details", id)
      .then(res => {
        let details = res.data;
        this.setState({ detail: details });
      })
      .catch(err =>
        console.log(`detail product wasn\'t sent successfully ${err}`)
      );
     
  }
  render() {

    const {productName, productDesc, productImg, productPrice, inCart, productCategory} = this.state.detail
    Object.values(this.state.detail).length >0  && console.log(productCategory);
    return (
      <div className="details-page">
        <div className="row">
          <div className="col-sm-8 col-ml-4 col-lg-4">
            <div className="card">
              <div className="card-image">
                <img
                  className="details-img"
                  src={productImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-ml-4 col-lg-4">
            <h1>{productName}</h1>
            <h5>DETAILS</h5>
            <p>
              {productDesc}
            </p>
            <h6>PRICE</h6>
            <p>₦ {productPrice}</p>
            <Button content="Add To Cart" />
            <Button content="Continue Shopping" />
          </div>
        </div>
   
        <h3 style={{ margin: "4%" }}>Other Related Products</h3>

        <div style={{ margin: "8%", marginTop: '0' }}>
        {
          Object.values(this.state.detail).length >0 && (<Recommendations category={productCategory} />)
        }
        </div>
   
      </div>
    );
   
  }
}

export default Details;

 