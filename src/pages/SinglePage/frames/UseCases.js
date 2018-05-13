import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import UseCaseImage from './UseCases.svgjs';

class UseCases extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<UseCaseImage width="800" height="600"/>
			</div>;

	}
}
 
export default UseCases;