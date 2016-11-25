import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    constructor(private router: Router) {

    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.options.pushState = true;

        config.map([
            { route: [''], name: 'homepage', moduleId: './homepage', title:'Homepage' },
            { route: ['page/:id'], name: 'page', moduleId: './page', title: 'Page' },
            { route: ['pages'], name: 'pages', moduleId: './pages', title: 'Pages' },
            { route: ['post/:id'], name: 'post', moduleId: './post', title: 'Post' },
            { route: ['posts'], name: 'posts', moduleId: './posts', title: 'Posts' }
        ]);

        this.router = router;
  }
}
