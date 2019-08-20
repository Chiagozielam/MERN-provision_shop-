import React, { Component } from 'react'
import {Link} from "react-router-dom";
import SideNavCss from './style.module.css'

class Admin extends Component {
  render() {
    return (
      <div className={SideNavCss.sidenav}>
        <div style={{height: "90vh", width: "15vw", fontSize: "20px", fontWeight: "bold"}}>
            <div className="pt-5 pl-3">
              <p className="pb-2" className={SideNavCss.sideNavBtn}><Link to='/admin/addproductsadmin' className="mainGreyColor link">Update product</Link></p>
              <p className="pb-2" className={SideNavCss.sideNavBtn}><Link to='/admin/addproductsadmin' className="mainGreyColor link">Delete product</Link></p>
              <p className="pb-2" className={SideNavCss.sideNavBtn}><Link to='/admin/addproductsadmin' className="mainGreyColor link">Update product</Link></p>
            </div>
        </div>

      </div>
    )
  }
}


export default  Admin