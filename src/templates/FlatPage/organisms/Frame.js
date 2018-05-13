import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./Frame.scss";
/** Section of page, screen of dialog */
class Frame extends Component {
        constructor(props) {
		super(props);
		this.props = props;
	}
	renderContent() {
           return <div>Frame Content</div>;
	}
	render() {
		let t=this;
		return <div className="frame" id={t.props.id}>
			   {t.renderContent()}
		       </div>;
	}
}
Frame.propTypes = {
  color: PropTypes.string
  ,id: PropTypes.string
}
export default Frame;