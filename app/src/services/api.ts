import {lazy} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {PostType, WPPostObject} from '../interfaces';

declare var wpTheme: any;

const resolveJson = response => response.json();
const takeOne = response => response[0];

export class Api {
    private http: HttpClient;

    constructor(@lazy(HttpClient) private getHttpClient) {
        this.http = this.getHttpClient();

        this.http.configure(config => {
            config
                .withBaseUrl(wpTheme.api_url)
        });
    }

    single(postType: PostType, id: number): Promise<WPPostObject> {
        let pluralizedPostType = postType + 's';

        return this.http.fetch(`${pluralizedPostType}/${id}`).then(resolveJson);
    }

    many(postType: PostType, limit: number = 5): Promise<WPPostObject[]> {
        let pluralizedPostType = postType + 's';

        return this.http.fetch(`${pluralizedPostType}?per_page=${limit}`).then(resolveJson);
    }

    categories(): Promise<any[]> {
        return this.http.fetch(`categories?sort=name&hide_empty=true&per_page=50`).then(resolveJson);
    }

    getHomepage(): Promise<WPPostObject> {
        return this.single('page', 2);
    }

    create(postType: PostType, body) {
        return this.http.fetch(`${postType}`, {
            method: 'post',
            body: json(body)
        });
    }

    update(postType: PostType, ID: number, body) {
        return this.http.fetch(`${postType}/${ID}`, {
            method: 'post',
            body: json(body)
        });
    }

    delete(postType: PostType, ID: number) {
        return this.http.fetch(`${postType}/${ID}`, {
            method: 'delete'
        });
    }

}
