import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Posts {
    
    items = {};

    constructor(private api: Api) {
    }

    activate(params, routeConfig) {
        this.api.many('post').then(posts => this.content = posts);
    }
}
