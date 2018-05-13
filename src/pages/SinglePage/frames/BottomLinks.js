import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';

class BottomLinks extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<a style={{"margin-right":"3em"}} href="https://www.facebook.com/pg/Garage48/photos/">More photos</a> 
				<a href="https://www.youtube.com/user/Garage48org/videos?sort=dd&view=0&flow=grid">Presentation video</a>
			</div>;

	}
}
 
export default BottomLinks;
