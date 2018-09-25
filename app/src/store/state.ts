import { WPPostObject } from 'interfaces';

export interface CategoryState {
    data: any[];
    loaded: boolean;
}

export interface PageState {
    data: WPPostObject[];
    loaded: boolean;
    page?: WPPostObject;
}

export interface PostState {
    data: WPPostObject[];
    loaded: boolean;
    post?: WPPostObject;
    recent: WPPostObject[];
}

export interface State {
    categories: CategoryState;
    pages: PageState;
    posts: PostState;
}

export function getInitialState() {
    return {
        categories: {
            data: [],
            loaded: false
        },
        pages: {
            data: [],
            loaded: false
        },
        posts: {
            data: [],
            loaded: false,
            recent: []
        }
    };
}

export const initialState: State = {
    ...getInitialState()
  };
