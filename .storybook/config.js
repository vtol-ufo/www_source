import { configure } from '@storybook/react';
import 'bootstrap';
import 'jquery';
import 'tether';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import i18n from 'components/utils/I18n.js';
import {I18nextProvider} from 'react-i18next';
import 'entrypoint.scss';

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);