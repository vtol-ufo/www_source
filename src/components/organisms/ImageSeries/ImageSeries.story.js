import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageSeries from "./ImageSeries.js";

import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import 'entrypoint.scss';

storiesOf('organisms/ImageSeries', module)
  .add('images', () => (
    <ImageSeries/>
  ));
