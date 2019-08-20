import React from "react";
import "./App.css";
import NavBar from "../src/components/Navbar";
import AboutUs from "./routes/AboutUs.jsx";
import Cart from "./routes/Cart.jsx";
import Details from "./routes/Details";
import { Switch, Route } from "react-router-dom";
// -----USER COMPONENT ROUTES------------

// -----IMPORTS FOR OTHER ROUTING---------
import AllProducts from "./routes/AllProducts";
import CocoProducts from "./routes/CocoProducts";
import DiaryProducts from "./routes/DiaryProducts";

// --------------LOGIN FOR ADMIN--------------------------
import AdminLogin from "./routes/admin/login";

// --------RESTRICTED ROUTES-------------------
import Admin from "./routes/admin/index";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route path="/about" component={AboutUs} />
        <Route path="/cart" component={Cart} />
        <Route path="/details/:id" render={props => <Details {...props} />} />
        <Route path="/cocoproducts" component={CocoProducts} />
        <Route path="/diaryProducts" component={DiaryProducts} />
        <Route path="/login" component={AdminLogin} />

        {/* --------RESTRICTED ROUTES------------------- */}
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
