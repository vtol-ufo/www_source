import React, {Component} from 'react';
import PropTypes from 'prop-types';

import i01 from "./land01.ljpg";
import i02 from "./land02.ljpg";
import i03 from "./land03.ljpg";
import i04 from "./land04.ljpg";
import i05 from "./land05.ljpg";
import i06 from "./land06.ljpg";
import i07 from "./land07.ljpg";
import i08 from "./land08.ljpg";
import i09 from "./land09.ljpg";
import i10 from "./land10.ljpg";
import i11 from "./land11.ljpg";
import i12 from "./land12.ljpg";
import i13 from "./land13.ljpg";

import ufo from "./ufo.lgif";

let im = [];

im[0] = i01;
im[1] = i02;
im[2] = i03;
im[3] = i04;
im[4] = i05;
im[5] = i06;
im[6] = i07;
im[7] = i08;
im[8] = i09;
im[9] = i10;
im[10] = i11;
im[11] = i12;
im[12] = i13;


class ImageSeries extends Component {
   constructor(props) {
	super(props);
	this.state = {
	      backgroundImage: 0,
	      direction: -1
	};
	this.images=im;
	window.setTimeout(this.lift.bind(this), 2000);
   }
   lift() {
        if(this.state.backgroundImage == this.images.length-1 || this.state.backgroundImage == 0 ) {
		this.state.direction *= -1;
	}
	this.state.backgroundImage += this.state.direction;
	this.setState(this.state);
	window.setTimeout(this.lift.bind(this), 2000);
   }
   render() {
	let t = this;
      return <div style={{
			"height": 200,
			"width": 200
		}}>
			<img src={t.images[t.state.backgroundImage]} width={200} height={200}/>
			<div style={{
				"height": 50,
				"width": 50,
				"position": "relative",
				"top":-150,
				"left":50,
				"z-index":1000
			}}>
				<img src={ufo} width={50} height={50}/>
			</div>
		</div>;
   }
}

ImageSeries.propTypes = {
  imagePrefix: PropTypes.string
  ,startIndex: PropTypes.number
  ,endIndex: PropTypes.number
  ,overlay: PropTypes.string
  ,forcedLinks: PropTypes.any
}

export default ImageSeries;