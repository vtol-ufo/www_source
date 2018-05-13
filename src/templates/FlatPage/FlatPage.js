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
		return <ul className="nav nav-pills nav-stacked"><li><a href="#section1">Check & See</a></li></ul>;
	}
	renderLeftCol() {
		return <ul className="nav nav-pills nav-stacked"><li><a href="#section1">Check & See</a></li></ul>;
	}
	render() {
		let t=this;
		return <div style={{"width":"100%"}}> 				
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-10">{t.renderFrames()}</div>
						<div className="col-sm-1"></div>
					</div> 
				</div>
			</div>;
	}
}

export default FlatPage;