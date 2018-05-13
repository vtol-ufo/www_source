import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';


class Future extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>Future plans</h3>
				<ul>
					<li>Rechecking</li>
					<li>Investors</li>
					<li>Full fling prototype</li>
					<li>Productions</li>
				</ul>
			</div>;

	}
}
 
export default Future;