import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="searchBarContainer">
          <form action="">
            <div className="form-group row mainSearchBox">
              <div className="col-sm-8">
                <input
                  type="search"
                  name="searchBar"
                  id=" searchBar"
                  className="form-control form-control-lg"
                  placeholder="Search for products..."
                />
              </div>
              <div className="col-sm-1">
                <button className="btn " type="submit">
                  <span className="mr-2 searchIcon">
                    <i className="fas fa-search" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
