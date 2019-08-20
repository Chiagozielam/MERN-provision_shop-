import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


class SideNav extends Component {
  render() {
    return (
      <div className="side-nav shadow d-sm-none d-md-block">
        <div className="">
          <div
            className=" mainDarkBg"
            style={{
              height: "90vh",
              width: "15vw",
              fontSize: "16px",
              fontWeight: "bold",
              padding: '10%',
              backgroundColor: 'none'
            }}
          >
              <h5 style={{fontWeight: 'bold'}}>CATEGORIES</h5>
            <div className="pt-3 pl-1">
              <p>
                <Link
                  to="/"
                  className="sidenav-links"
                >
                  <div className='sidenav-btns'>All Products</div>
                </Link>
              </p>
              <p>
                <Link
                  to="/cocoproducts"
                  className="sidenav-links"
                >
                  <div className='sidenav-btns'>All Coco Products</div>
                </Link>
              </p>
              <p>
                <Link
                  to="/diaryproducts"
                  className="sidenav-links"
                >
                  <div className='sidenav-btns'>All Diary Products</div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
