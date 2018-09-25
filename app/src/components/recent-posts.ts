import { State, PostState } from './../store/state';
import { customElement, bindable } from 'aurelia-framework';
import { connectTo, dispatchify } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import { getRecentPosts } from 'store/actions';

@customElement('recent-posts')
@connectTo<State>({
    selector: (store) => store.state.pipe(pluck('posts')),
    target: 'posts'
})
export class RecentPosts {
    private posts: PostState;

    @bindable() title = 'Recent Posts';
    @bindable() limit = 5;

    attached() {
        dispatchify(getRecentPosts)(this.limit);
    }
}
