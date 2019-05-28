import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../components/Header';

storiesOf('Header', module)
    .add('without button', () => (
        <Header router={{ route: 'any' }} />
    ))
    .add('with button', () => (
        <Header router={{ route: '/MoviePage' }} />
    ));
