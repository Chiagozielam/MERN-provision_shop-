import React, { Component } from "react";
import axios from "axios";
import { getCartItems } from "./components/helpers/cartItems";
import { Redirect } from "react-router-dom";

const ProductContext = React.createContext();
const { getJwt } = require("./components/helpers/jwt");
class Context extends Component {
  state = {
    allProducts: [],
    recentProducts: [],
    cocoProducts: [],
    diaryProducts: [],
    prodCollection: [],
    detailProduct: [],
    cartItems: [],
    priceArr: [],
    totalPrice: 0,
    password: "",
    email: "",
    adminUser: undefined,
    adminToken: undefined
  };

  componentDidMount() {
    this.getAdminUser();
    this.allProducts();
    this.recentProducts();
    this.cocoProducts();
    this.diaryProducts();
    this.getAdminUser();
  }

  getAdminUser = () => {
    const jwt = getJwt();
    axios
      .get("/localhost:5000/getadminuser", {
        headers: { "x-access-token": `Bearer ${jwt}` }
      })
      .then(res => {});
  };

  adminLoginFormSubmit = e => {
    e.preventDefault();
    console.log("you clicked the login button!!");
    const stateItems = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(stateItems);

    // -------HERE WE POST THE DATA TO THE ROUTE ADMIN LOGIN----------
    axios
      .post("http://localhost:5000/adminlogin", stateItems)
      .then(res => {
        console.log("successfully posted to api login endpoint from client");
        localStorage.setItem("provision-jwt", res.data.user.token);
        this.setState({ adminToken: res.data.user.token });
        this.setState({ adminUser: res.data.user.adminUser });
        const userData = res.data.user.adminUser;
        localStorage.setItem("adminUser", JSON.stringify(userData));
        console.log(this.state.adminUser);
        // this.props.history.push('/admin')
        // return( <Redirect to='/admin' /> )
        return this.forceUpdate();
      })
      .catch(err => console.log(`the error is ${err}`));
  };

  allProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then(res => {
        console.log(res);
        let dataObj = [];
        let data = res;
        data.data.forEach(item => {
          const singleItem = { ...item };
          dataObj = [...dataObj, singleItem];
        });
        this.setState({ allProducts: dataObj }, () => {
          // this is where i plan to refactor my code so that I can the other individual
          // products types from the allProduct instead of sending individual axios requests 
          // individually. I might use the .find() method for this.
        });
      })
      .catch(err =>
        console.log(
          `this is the error caught while trying to get allProduct through axios: ${err}`
        )
      );
  };

  recentProducts = () => {
    axios
      .get("http://localhost:5000/recentproducts")
      .then(res => {
        console.log(res);
        let dataObj = [];
        let data = res;
        data.data.forEach(item => {
          const singleItem = { ...item };
          dataObj = [...dataObj, singleItem];
        });
        this.setState(() => {
          return { recentProducts: dataObj };
        });
        console.log(this.state.recentProducts);
      })
      .catch(err => console.log(`this is the error caught: ${err}`));
  };

  // ---- THIS FETCHES THE DATA FOR THE COCO PRODUCTS-----------
  cocoProducts = () => {
    axios
      .get("http://localhost:5000/coco")
      .then(res => {
        console.log(res);
        let dataObj = [];
        let data = res;
        data.data.forEach(item => {
          const singleItem = { ...item };
          dataObj = [...dataObj, singleItem];
        });
        this.setState(() => {
          return { cocoProducts: dataObj };
        });
        console.log(this.state.cocoProducts);
      })
      .catch(err => console.log(`this is the error caught: ${err}`));
  };

  diaryProducts = () => {
    axios
      .get("http://localhost:5000/milk")
      .then(res => {
        console.log(res);
        let dataObj = [];
        let data = res;
        data.data.forEach(item => {
          const singleItem = { ...item };
          dataObj = [...dataObj, singleItem];
        });
        this.setState(() => {
          return { diaryProducts: dataObj };
        });
        console.log(this.state.diaryProducts);
      })
      .catch(err => console.log(`this is the error caught: ${err}`));
  };

  // -----------THIS FUNCTION HERE IS USED IN THE ADD TO CART FUNCTION-----------
  getItem = id => {
    const product = this.state.allProducts.find(item => item._id === id);
    return product;
  };

  addToCart = id => {
    let tempProducts = [
      ...this.state.allProducts,
      ...this.state.cocoProducts,
      ...this.state.diaryProducts
    ];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = +1;
    const price = product.productPrice;
    product.totalPrice = price;

    //setting cart items to save to localStorage
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
    this.setState(
      () => {
        return {
          allProducts: tempProducts,
          cartItems: [...this.state.cartItems, product]
        };
      },
      () => this.getTotalPrice()
    );
  };
  increaseQuantity = id => {
    let tempProducts = [...this.state.allProducts];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    if (product.inCart === true) {
      product.count += 1;
      product.totalPrice = product.count * product.productPrice;
      this.getTotalPrice();
      this.forceUpdate();
    }
  };

  getTotalPrice = () => {
    const temp = [...this.state.cartItems];
    temp.map(item => {
      let price = item.productPrice;
      price += this.state.totalPrice;
      this.setState({ totalPrice: price });
    });
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  //-------------THE TWO ONCHANGE METHODS HERE SHOULD BE MERGED INTO ONE IN AN UPCOMMING UPDATE----------------
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increaseQuantity: this.increaseQuantity,
          getItem: this.getItem,
          handleDetail: this.handleDetail,
          adminLoginFormSubmit: this.adminLoginFormSubmit,
          onChangeEmail: this.onChangeEmail,
          onChangePassword: this.onChangePassword
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { Context, ProductConsumer };
