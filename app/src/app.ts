import {Router, RouterConfiguration} from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
    constructor(private router: Router) {

    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.options.pushState = true;

        config.map([
            { route: [''], name: 'homepage', moduleId: PLATFORM.moduleName('./homepage'), title:'Homepage' },
            { route: ['page/:id'], name: 'page', moduleId: PLATFORM.moduleName('./page'), title: 'Page' },
            { route: ['pages'], name: 'pages', moduleId: PLATFORM.moduleName('./pages'), title: 'Pages' },
            { route: ['post/:id'], name: 'post', moduleId: PLATFORM.moduleName('./post'), title: 'Post' },
            { route: ['posts'], name: 'posts', moduleId: PLATFORM.moduleName('./posts'), title: 'Posts' }
        ]);

        this.router = router;
  }
}
