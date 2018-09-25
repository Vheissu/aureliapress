import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Posts {
    
    posts = [];

    constructor(private api: Api) {
    }

    activate(params, routeConfig) {
        this.api.many('post').then(posts => this.posts = posts);
    }
}
