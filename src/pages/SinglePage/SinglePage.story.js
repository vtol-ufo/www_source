import React from 'react';
import { storiesOf } from '@storybook/react';
import SinglePage from "./SinglePage.js";

import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import 'entrypoint.scss';

storiesOf('pages/SinglePage/Main', module)
  .add('main', () => (
    <SinglePage/>
  ));
