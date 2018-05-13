import React from 'react';
import { storiesOf } from '@storybook/react';

import WorkProgress from "./WorkProgress.js";

import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import 'entrypoint.scss';

storiesOf('pages/SinglePage/frames/WorkProgress', module)
  .add('images', () => (
    <WorkProgress/>
  ));
