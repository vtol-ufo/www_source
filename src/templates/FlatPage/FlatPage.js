import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HorizontalMenu from 'components/organisms/HorizontalMenu.js';
/**
 * Bootstrap flat design page
 * with top menu
 * side page structure
 * and set of frames - page parts
 */
class FlatPage extends Component {
	renderTopMenu() {
		return <HorizontalMenu/>;
	}
	renderFrames() {
		return <div id="section1">Frames</div>;
	}
	renderPageNavigation() {
		return <nav className="col-sm-2 navbar navbar-light bg-light" id="crollspy" style={{position:"static"}}><ul className="nav nav-pills nav-stacked"><li><a href="#section1">Check & See</a></li></ul></nav>;
	}
	renderLeftCol() {
		return <nav className="col-sm-2 navbar navbar-light bg-light" id="crollspy" style={{position:"static"}}><ul className="nav nav-pills nav-stacked"><li><a href="#section1">Check & See</a></li></ul></nav>;
	}
	render() {
		let t=this;
		return <div style={{"width":"100%"}}> 				
				<div className="container-fluid">
					<div className="row">
						{t.renderLeftCol()}
						<div className="col-sm-8">{t.renderFrames()}</div>
						{t.renderPageNavigation()}
					</div> 
				</div>
			</div>;
	}
}

export default FlatPage;