import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Post {
	
    content = {};

	constructor(private api: Api) {
	}

	activate(params, routeConfig) {
		this.api.single('post', params.id)
			.then(post => {
				this.content = post;

				routeConfig.navModel.setTitle(post.title.rendered);
			});
	}
}
