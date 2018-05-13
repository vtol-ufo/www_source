import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import STLViewer from 'stl-viewer';
import UFO from './UFO.stl'


class UfoStl extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {//https://drive.google.com/uc?export=download&id=189n993SNV7FBPKAtHKx1Stq7Q6Qc-9uP
	        let t = this;		
		return  <div>
				<h3>Look & Feel</h3>
				<div style={{"display": "flex", "justify-content":"center"}}>
				<STLViewer
					url={UFO}					
					height={1000}
					width={1000}
					modelColor='#C7E6FF'
					backgroundColor='white'
					rotate={true}
					orbitControls={true}
				/>
				</div>
			</div>;
	}
}

export default UfoStl;