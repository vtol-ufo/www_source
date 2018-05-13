import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./HorizontalMenu.scss";

/**
 * Top menu
 * Receive from server available elements based on user permissions
 */
class HorizontalMenu extends Component {
   renderLinks() {
      return <ul className="nav navbar-nav flex-row">
        <li className="nav-item active">
          <a className="nav-link" href="#">Examples <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Queue</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Statistics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Categories</a>
        </li>
      </ul>;
   }
   renderLogo() {
     return <a className="navbar-brand text-white d-flex flex-row" href="#">
                 <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" 
                 className="d-flex mr-3" alt="" style={{"display":"inline"}}/>
	 	 <h5 style={{"display":"inline"}}>Top Navigation</h5>
            </a>;
   }
   renderSearch() {
     return <div className="d-flex navbar-right align-items-center flex-row"><form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form></div>;
   }
   render() {
     let t = this;
     return <nav className="navbar navbar-light bg-primary sticky-top flex-row justify-content-between align-items-center ">		
                	{t.renderLogo()}  	
			<div className="d-flex justify-content-between flex-row">
			  {t.renderLinks()}		  
			  {t.renderSearch()}
			</div>
            </nav>;
   }
}

HorizontalMenu.propTypes = {
  showSearch: PropTypes.bool
  ,showLogo: PropTypes.bool
  ,forcedLinks: PropTypes.any
}

export default HorizontalMenu;