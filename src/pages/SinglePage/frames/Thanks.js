import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';

import "./Thanks.scss";

class Thanks extends Frame {
        constructor(props) {
		super(props);		
        }
        
   	renderContent() {
	        let t = this;		
		return  <div>
				<h3>People behind project</h3>				
				<div style={{"width":"100%"}}>
				  <div style={{"float":"left", "margin-right":"5em"}}>
					<ul>
						<li><div className="Thanks_name">Vitalijs Entins</div><div className="Thanks_input">Idea, Concept - Calculations</div></li>
						<li><div className="Thanks_name">Vadim Stojan</div><div className="Thanks_input">Management and Motivation</div></li>
						<li><div className="Thanks_name">Antonina Vracinska</div><div className="Thanks_input">Cold solutions management & Engeenering</div></li>
						<li><div className="Thanks_name"><a href="https://www.researchgate.net/profile/Shravan_Koundinya">Shravan Koundinya</a></div><div className="Thanks_input">Since In Action: Calculations & Engeenering</div></li>
                                        	<li><div className="Thanks_name">Dietrich Nexus</div><div className="Thanks_input">Prototyping, Implementation & Engeenering</div></li>
					</ul>
				  </div>
				  <div>
					<ul>					
						<li><div className="Thanks_name">Dobryna Lazarev</div><div className="Thanks_input">3D Prototyping & Engeenering, Fly Experiments</div></li>
						<li><div className="Thanks_name">Ivan Grachov</div><div className="Thanks_input">Electronics&Mechanic Engeenering</div></li>
						<li><div className="Thanks_name">Vladimir Kozlov</div><div className="Thanks_input">Engeenering Outsource</div></li>
						<li><div className="Thanks_name">Sergejs Kosigins</div><div className="Thanks_input">Web Design</div></li>
					</ul>				
				  </div>
				</div>
				<div style={{"clear":"both"}}>
					<ul>
						<li>Thanks to <a href="http://garage48.org/events/garage48-spacetech-riga-challenge">mentors</a> of Garage48 especialy for Andrejs Pukitis & Janis Dimpers for critical view</li>
					</ul>
				</div>
				
			</div>;

	}
}
 
export default Thanks;