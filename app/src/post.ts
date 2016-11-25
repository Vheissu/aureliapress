import {inject} from 'aurelia-framework';
import {WpApi} from './services/wp-api';

@inject(WpApi)
export class Post {
	private api: WpApi;
	
    post = {};
	comments = [];

	constructor(api){
		this.api = api;
	}

	activate(params, routeConfig) {
		this.api.getPost(params.id)
            .then(response => response.json())
			.then(post => {
				this.post = post;
				this.comments = post.comments;

				routeConfig.navModel.setTitle(post.title);
			});
	}
}
