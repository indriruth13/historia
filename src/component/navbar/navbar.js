import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import navBar from './navbar.component.js';


const reactLifecyles = singleSpaReact({
    React,
    ReactDOM,
    domElementGetter,
    rootComponent: navBar,
});

export const bootstrap = [
    reactLifecyles.bootstrap,
];

export const mount = [
    reactLifecyles.mount,
];

export const unmount = [
    reactLifecyles.unmount,
];

function domElementGetter() {
    return document.getElementById("navbar");
}
