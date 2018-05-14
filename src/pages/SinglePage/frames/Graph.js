import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import LinearDependency from './LinearDependency.ljpg';
import TestStand from './TestStand.ljpg';

class Graph extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>Measurements</h3>
				<div style={{"display": "flex", "justify-content":"center"}}>
				  <img src={TestStand} width="400"/>
				  <img src={LinearDependency} width="400"/>
				</div>
			</div>;
	}
}

export default Graph;