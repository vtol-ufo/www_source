import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatPage from 'templates/FlatPage/FlatPage.js';
import ImageSeries from 'components/organisms/ImageSeries/ImageSeries.js';

import { Nav, NavItem, NavLink } from 'reactstrap';

import InShort from './frames/InShort.js';
import UfoStl from './frames/UfoStl.js'; 
import WingStl from './frames/WingStl.js'; 
import Thanks from './frames/Thanks.js';
import UseCases from './frames/UseCases.js';
import Details from './frames/Details.js';
import Graph from './frames/Graph.js';
import WorkProgress from './frames/WorkProgress/WorkProgress.js';
import BottomLinks from './frames/BottomLinks.js';


import './SinglePage.scss';

class SinglePage extends FlatPage {
        constructor(props) {
		super(props);
	}
   	renderFrames() {
		let t = this;
		return <div>    
				<div id="nameFrame"><InShort/></div>
				<div id="lfFrame"><UfoStl/></div>
				<div id="moreFrame"><Details/></div>
				<div id="useFrame"><UseCases/></div>
				<div id="protoFrame"><WingStl/></div>
				<div id="graphFrame"><Graph/></div>
				<div id="thankYouFrame"><Thanks/></div>
				<div id="workPhotoFrame"><WorkProgress/></div>
				<div><BottomLinks/></div>
			</div>;
	}
	renderPageNavigation() {
		return <nav className="col-sm-2 navbar navbar-light bg-light" id="crollspy" style={{position:"static"}}>
				<Nav vertical pills stacked className="SinglePage__nav" style={{"top":"100px"}}>
					<NavItem><NavLink href="#nameFrame">In Short</NavLink></NavItem>
					<NavItem><NavLink href="#lfFrame">Look & Feel</NavLink></NavItem>
					<NavItem><NavLink href="#moreFrame">More Details</NavLink></NavItem>
					<NavItem><NavLink href="#useFrame">Use Cases</NavLink></NavItem>
					<NavItem><NavLink href="#protoFrame">Prototype</NavLink></NavItem>
					<NavItem><NavLink href="#thankYouFrame">Thank You</NavLink></NavItem>
					<NavItem><NavLink href="#workPhotoFrame">Work In Progress</NavLink></NavItem>
				</Nav>
			</nav>;
	}

	renderLeftCol() {
		return <div className="col-sm-2"><div style={{"position":"fixed", "top":"100px"}}>
		 	<ImageSeries/>
		       </div></div>;
	}

}

export default SinglePage;