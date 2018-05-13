import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';

import ufoair from "./UFOAir.jpg";
import ufocut from "./UFOCut.jpg";
import ufofull from "./UFOFull.jpg";
import planefull from "./PlaneFull.jpg";
import planecut from "./PlaneCut.jpg";

class Details extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>Why? What? How?</h3>
				<div>Existing VTOL platforms like drones and helicopter have good landing posibilities, but limited in speed in horizontal movements. 
				     To move forward rotor must be positioned with angle. Rotors reach sound speed and cause lot of noise 
					and require lot of energy to overcome air pressure on end of wings. Maximum speed limited to 150-200km/h
				</div>
				<div>
				     Planes do not have such small speed limit, but have no posibility for VTOL. 
				     To overcame this limitation Plane wings can be modified or disk like flying platform with special wings and turbine can be created.
				     Using Bernuli law wing create rarefied air above and due to Coand effect vertical force appears.
				</div>
				<div style={{"display": "flex", "justify-content":"center"}}>
					<img src={ufofull} width="200"/> <img src={ufocut}  width="200"/> <img src={ufoair}  width="200"/>
				</div>
				<div style={{"display": "flex", "justify-content":"center"}}>
					<img src={planefull} width="200"/> <img src={planecut}  width="200"/>
				</div>
			</div>;

	}
}
 
export default Details;