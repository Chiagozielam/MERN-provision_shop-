import React, { Component } from "react";
import Axios from "axios";
import GeneralAdminStyles from "../style.module.css"

class AddProducts extends Component {
  state = {
    productName: "",
    productPrice: "",
    productDesc: "",
    productImg: "",
    productCategory: ""
  };

  formSubmit = e => {
    e.preventDefault();
    console.log("clicked!!");

    const stateItems = {
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productDesc: this.state.productDesc,
      productImg: this.state.productImg,
      productCategory: this.state.productCategory
    };

    // -------HERE WE POST THE DATA TO THE ROUTE FOR ALL PRODUCTS----------
    Axios.post("http://localhost:5000/products", stateItems)
      .then(res => {
        console.log("successfully posted to api products endpoint");
      })
      .catch(err => console.log(`the error is ${err}`));

    // -------HERE WE SET THE ORIGINAL STATE OF EACH STATE ITEM TO EMPTY, THIS WOULD MAKE ALL FORM
    //BOXES TO BE EMPTY AGAIN----------
    this.setState({
      productName: " ",
      productPrice: " ",
      productDesc: " ",
      productImg: " ",
      productCategory: " "
    });

    // function
  };

  imgUpload = e => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcft8yhab/upload";
    const CLOUDINARY_UPLOAD_PRESET = "qa4hsadk";

    var file = e.target.files[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    Axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "applicaction/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(res => {
        console.log(res);
        this.setState({ productImg: res.data.secure_url });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          <div className="card p-3 shadow-sm">
            <h3>Add Products</h3>
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input
                  value={this.state.productName}
                  onChange={e => {
                    this.setState({ productName: e.target.value });
                  }}
                  type="text"
                  class="form-control form-control-lg"
                  id="productName"
                  aria-describedby="ProductName"
                  placeholder="Enter Name Of Product"
                />
              </div>
              <div class="form-group">
                <label for="price">Price (₦)</label>
                <input
                  value={this.state.productPrice}
                  onChange={e => {
                    this.setState({ productPrice: e.target.value });
                  }}
                  type="number"
                  class="form-control form-control-lg"
                  id="price"
                  placeholder="₦"
                />
              </div>

              {/* PRODUCT DESCRPITION */}
              <div class="form-group">
                <label for="price">Description</label>
                <textarea
                  value={this.state.productDesc}
                  rows="5"
                  onChange={e => {
                    this.setState({ productDesc: e.target.value });
                  }}
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Type a short description of the product..."
                />
              </div>
              <div class="form-group">
                <label for="">Product Category</label>
                <select
                  id="prod_cat"
                  class="form-control"
                  value={this.state.productCategory}
                  onChange={() => {
                    let prodCategory = document.getElementById("prod_cat");
                    let selectedValue = prodCategory.value;

                    this.setState(() => {
                      return { productCategory: selectedValue };
                    });
                  }}
                >
                  <option selected>...</option>
                  <option>coco products</option>
                  <option>diary products</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Add Image</label>
                <input
                  onChange={this.imgUpload}
                  type="file"
                  class="form-control-file"
                  id="imgUpload"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                ADD
              </button>
            </form>
          </div>
      </div>
    );
  }
}

export default AddProducts;
