import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import HomeRoot from './home.component.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: HomeRoot,
    domElementGetter,
});

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
}

export function mount(props) {
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    return reactLifecycles.unmount(props);
}

function domElementGetter() {
    let el = document.getElementById('home');
    if (!el) {
        el = document.createElement('div');
        el.id = 'home';
        document.body.appendChild(el);
    }

    return el;
}