import {inject} from 'aurelia-framework';
import {WpApi} from './services/wp-api';

@inject(WpApi)
export class Homepage {
	page = {};

	constructor(private api: WpApi) {
	
	}

    activate() {
        return this.api.getHomepage().then(response => response.json()).then(response => {
            this.page = response;
        });
    }
}
