import {lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
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

    many(postType: PostType): Promise<WPPostObject[]> {
        let pluralizedPostType = postType + 's';

        return this.http.fetch(`${pluralizedPostType}`).then(resolveJson);
    }

    getHomepage(): Promise<WPPostObject> {
        return this.single('page', 2);
    }
}
