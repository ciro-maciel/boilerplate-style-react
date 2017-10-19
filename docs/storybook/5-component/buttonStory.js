import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'react-style-boilerplate';
// import Doc from './doc.md';

const story = () => (
    <Button>button</Button>
);


storiesOf('Component', module).add('Button', story);