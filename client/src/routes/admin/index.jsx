import React, { Component } from "react";
import Axios from "axios";
import {withRouter, Redirect} from 'react-router-dom';
import {getJwt} from '../../components/helpers/jwt'


// --------COMPONENTS---------
import AdminSideNav from "../../components/adminComponent/sideNav";
import AddProducts from "../../components/adminComponent/addProducts"
import DeleteProducts from "../../components/adminComponent/deleteProducts"
import UpdateProducts from "../../components/adminComponent/updateProducts"




class Admin extends Component {
  state = {
    productName: "",
    productPrice: "",
    productDesc: "",
    productImg: "",
    productCategory: "",
    token: getJwt() || "",
  };


  render() {
    if(!this.state.token){
      return <Redirect to="/login"/>
   }
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <AdminSideNav />
          </div>
          <div className="col-10" style={{backgroundColor: "#ECF0F8", padding: "2%"}}>
            <div className="row">
              <div className="col-sm-10 col-md-6 col-lg-4">
              <AddProducts />
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4">
              <DeleteProducts />
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4">
              <UpdateProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Admin)