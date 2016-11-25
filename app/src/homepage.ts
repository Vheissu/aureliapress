import {inject} from 'aurelia-framework';
import {Api} from './services/api';

@inject(Api)
export class Homepage {
	content = {};

	constructor(private api: Api) {
	
	}

    activate() {
        return this.api.getHomepage().then(response => this.content = response);
    }
}
