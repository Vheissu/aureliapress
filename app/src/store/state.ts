import { WPPostObject } from 'interfaces';

export interface State {
    categories: {
        data: any[];
        loaded: boolean;
    };

    pages: {
        data: WPPostObject[];
        loaded: boolean;
        page?: WPPostObject;
    };

    posts: {
        data: WPPostObject[];
        loaded: boolean;
        post?: WPPostObject;
        recent: WPPostObject[];
    }
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
