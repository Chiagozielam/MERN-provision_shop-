import React, { Component } from "react";
import {ProductConsumer} from "../../context"
import {getJwt} from '../../components/helpers/jwt'
import {Redirect} from 'react-router-dom'

class AdminLogin extends Component {
  state = {
    token: getJwt() || "",
  };

  // formSubmit = e => {
  //   e.preventDefault();
  //   console.log("you clicked the loign button!!");

  //   const stateItems = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };

  //   // -------HERE WE POST THE DATA TO THE ROUTE ADMIN LOGIN----------
  //   Axios.post("http://localhost:5000/adminlogin", stateItems)
  //     .then(res => {
  //       console.log("successfully posted to api login endpoint");
  //       localStorage.setItem('provision-jwt', res.data.user.token)
  //       this.props.history.push('/admin')

        
  //     })
  //     .catch(err => console.log(`the error is ${err}`));
  // };

  render() {
    if(this.state.token){
       return <Redirect to="/admin"/>
    }
    return (
      <div style={{backgroundColor: "#ECF0F8", height: '100vh', top: '0', position: 'absolute', width: "100%"}}>
          <div className="card p-3 shadow" style={{width: '40%', margin: '10% auto'}}>
            <h3>ADMIN LOGIN</h3>
            <ProductConsumer>
              {value => {
                return (
                  <form onSubmit={value.adminLoginFormSubmit} value={this.state}>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input
                  value={value.email}
                  onChange={value.onChangeEmail}
                  type="email"
                  class="form-control form-control-lg"
                  id="productName"
                  aria-describedby="email"
                  placeholder="Enter Email Address"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  value={value.password}
                  onChange={value.onChangePassword}
                  type="password"
                  class="form-control form-control-lg"
                  id="password"
                  placeholder="*************"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                LOGIN
              </button>
            </form>
                )
              }}
            </ProductConsumer>
          </div>
      </div>
    );
  }
}

export default AdminLogin;
