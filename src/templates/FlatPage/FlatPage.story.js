import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import 'entrypoint.scss';

import FlatPage from 'templates/FlatPage/FlatPage.js';

storiesOf('templates/FlatPage/main', module)
  .add('def', () => (
    <FlatPage/>
  ));
