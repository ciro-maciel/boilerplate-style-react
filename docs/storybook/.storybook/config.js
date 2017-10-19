import {
    configure
} from '@storybook/react';
import {
    setOptions
} from '@storybook/addon-options';

import './style.css';

const context = require.context('../', true, /Story\.js$/);

setOptions({
    name: 'Style Boilerplate',
    url: 'https://ciro-maciel.github.io/react-style-boilerplate',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false
});

function loadStories() {
    context.keys().forEach(context);
}

configure(loadStories, module);