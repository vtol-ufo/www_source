import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import LinearDependency from './LinearDependency.jpg'


class Graph extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>Measurements</h3>
				<div style={{"display": "flex", "justify-content":"center"}}>
				  <img src={LinearDependency}/>
				</div>
			</div>;
	}
}

export default Graph;