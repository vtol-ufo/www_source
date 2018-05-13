import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import i18n from 'components/utils/I18n.js';
import {I18nextProvider} from 'react-i18next';


import "./entrypoint.scss";

import FlatPage from 'templates/FlatPage/FlatPage.js';
import SinglePage from 'pages/SinglePage/SinglePage.js';


window.Popper = Popper;
window.React = React;
window.ReactDOM = ReactDOM;
let content = <SinglePage/>;

ReactDOM.render(<I18nextProvider i18n={i18n}>{content}</I18nextProvider>, document.getElementById('react-page-root'));


