import {inject} from 'aurelia-framework';
import {WpApi} from './services/wp-api';

@inject(WpApi)
export class Page {
	private api: WpApi;
	
    page = {};

	constructor(api) {
		this.api = api;
	}

	activate(params, routeConfig) {
		this.api.getPage(params.id)
            .then(response => response.json())
			.then(data => {
				this.page = data.page;
				routeConfig.navModel.setTitle(data.page.title);
			});
	}
}
