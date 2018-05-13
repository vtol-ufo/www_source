import React, {Component} from 'react';
import PropTypes from 'prop-types';

import i01 from "./land01.jpg";
import i02 from "./land02.jpg";
import i03 from "./land03.jpg";
import i04 from "./land04.jpg";
import i05 from "./land05.jpg";
import i06 from "./land06.jpg";
import i07 from "./land07.jpg";
import i08 from "./land08.jpg";
import i09 from "./land09.jpg";
import i10 from "./land10.jpg";
import i11 from "./land11.jpg";
import i12 from "./land12.jpg";
import i13 from "./land13.jpg";

import ufo from "./ufo.gif";

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
	      backgroundImage: 0
	};
	this.images=im;
   }
   render() {
	let t = this;
      return <div style={{
			"height": 100,
			"width": 100
		}}>
			<img src={t.images[t.state.backgroundImage]} width={100} height={100}/>
			<div style={{
				"height": 100,
				"width": 100
			}}>
				<img src={ufo} width={100} height={100}/>
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