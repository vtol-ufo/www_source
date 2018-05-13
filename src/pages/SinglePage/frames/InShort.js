import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';

class InShort extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>VTOL - In Short</h3>
				<div>VTOL- vertical takeoff and landing scheme that would be up to 30% more accurate than the current drones in assistance of takeoff and landing.</div>
			</div>;

	}
}
 
export default InShort;