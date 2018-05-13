import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import STLViewer from 'stl-viewer';
import Wing from './Wing.stl'


class WingStl extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {//https://drive.google.com/uc?export=download&id=189n993SNV7FBPKAtHKx1Stq7Q6Qc-9uP
	        let t = this;		
		return  <div>
				<h3>Wing prototype</h3>
				<div>Success criteria: The prototype will be shaped like wings and will generate lift.</div>
				<div  style={{"display": "flex", "justify-content":"center"}}>
				<STLViewer
					url={Wing}					
					heigth={1000}
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

export default WingStl;