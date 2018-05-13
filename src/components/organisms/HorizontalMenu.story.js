import React from 'react';
import { storiesOf } from '@storybook/react';

import HorizontalMenu from 'components/organisms/HorizontalMenu.js';
import 'bootstrap';
import 'jquery';
import 'tether';
import Popper from 'popper.js';
import 'entrypoint.scss';

storiesOf('organisms/HorizontalMenu', module)
  .add('def', () => (
    <HorizontalMenu/>
  ));
