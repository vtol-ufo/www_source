import React from 'react';
import { storiesOf } from '@storybook/react';

import Frame from 'templates/FlatPage/organisms/Frame.js';

storiesOf('templates/FlatPage/FlatPageFrame', module)
  .add('def', () => (
    <Frame/>
  ));
