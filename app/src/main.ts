/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>

import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';

import './assets/styles/global.css';

import { initialState } from 'store/state';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

if (typeof PLATFORM.global.wpTheme === 'undefined') {
    console.log(PLATFORM.global);
    PLATFORM.global.wpTheme = {
        api_url: 'https://ilikekillnerds.com/wp-json/wp/v2/'
    };
}

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature(PLATFORM.moduleName('resources/index'));

    aurelia.use.plugin(PLATFORM.moduleName('aurelia-store'), {
        initialState,
        history: {
            limit: 10
        }
    });

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
    }

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}
