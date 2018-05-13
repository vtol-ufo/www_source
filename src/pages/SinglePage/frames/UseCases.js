import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import UseCaseImage from './UseCases.svgjs';
import CityInSky from './CityInSky.jpg';

class UseCases extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<UseCaseImage width="1000"/>
				<div>
					<img src={CityInSky} width={1000} />
				</div>
			</div>;

	}
}
 
export default UseCases;