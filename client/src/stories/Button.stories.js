import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

storiesOf('Button', module)
    .add('default state', () => (
        <Button onClickHandler={action('clicked')} textValue="Default Button" />
    ))
    .add('active state', () => (
        <Button onClickHandler={action('clicked')} textValue="Active button" isActive />
    ))
    .add('transparent', () => (
        <Button onClickHandler={action('clicked')} textValue="Transparent Button" isTransparent />
    ));
