import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Page {	
    content = {};

	constructor(private api: Api) {

	}

	activate(params, routeConfig) {
		this.api.single('page', params.id)
			.then(page => {
				this.content = page;

				routeConfig.navModel.setTitle(page.title.rendered);
			});
	}
}
