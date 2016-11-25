import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

declare var wpTheme: any;

@inject(HttpClient)
export class WpApi {

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .withBaseUrl(wpTheme.api_url)
        });
    }

    getHomepage(): Promise<any> {
        return this.getPages();
    }

    getPages(): Promise<any> {
        return this.http.fetch(`pages`);
    }

    getPage(id): Promise<any> {
        return this.http.fetch(`pages/${id}`);
    }

    getPageBySlug(slug): Promise<any> {
        return this.http.fetch(`pages/?slug=${slug}`);
    }

    getPost(id): Promise<any> {
        return this.http.fetch(`posts/${id}`);
    }

    getPostBySlug(slug): Promise<any> {
        return this.http.fetch(`post_by_slug/${slug}`);
    }

    getComments(id): Promise<any> {
        return this.http.fetch(`${id}/comments`);
    }

}
