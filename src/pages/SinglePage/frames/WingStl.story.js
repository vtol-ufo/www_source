import React from 'react';
import { storiesOf } from '@storybook/react';

import WingStl from "./WingStl.js";


storiesOf('pages/SinglePage/frames/WingStl', module)
  .add('stl', () => (
    <WingStl/>
  ));
