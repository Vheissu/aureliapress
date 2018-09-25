import store from '.';
import { State } from './state';

import { Api } from 'services/api';
import { Container } from 'aurelia-framework';

const api: Api = Container.instance.get(Api);

export async function getAllCategories(state: State): Promise<State> {
    const newState = {...state};
    
    const categories = await api.categories();

    newState.categories.data = categories;
    newState.categories.loaded = true;

    return newState;
}

export async function getAllPages(state: State, limit: number = 100): Promise<State> {
    const newState = {...state};

    const pages = await api.many('page', limit);

    newState.pages.data = pages;
    newState.pages.loaded = true;

    return newState;
}

export async function getPage(state: State, id: number | string): Promise<State> {
    const newState = {...state};
    const needle = typeof id === 'number' ? 'id' : 'slug';

    const page = state.pages.data.filter(page => page[needle] === id);

    if (page) {
        newState.pages.page = page[0];
    }

    return newState;   
}

export async function getAllPosts(state: State, limit: number = 100): Promise<State> {
    const newState = {...state};

    const posts = await api.many('post', limit);

    newState.posts.data = posts;
    newState.posts.loaded = true;

    return newState;
}

export async function getRecentPosts(state: State, limit: number = 5): Promise<State> {
    const newState = {...state};

    if (!state.posts.loaded) {
        getAllPosts(newState);
    }

    newState.posts.recent = state.posts.data.slice(0, limit);
    newState.posts.loaded = true;

    return newState;
}

export async function getPost(state: State, id: number | string): Promise<State> {
    const newState = {...state};
    const needle = typeof id === 'number' ? 'id' : 'slug';

    const post = state.posts.data.filter(post => post[needle] === id);

    if (post) {
        newState.posts.post = post[0];
    }

    return newState;   
}

store.registerAction('getAllCategories', getAllCategories);
store.registerAction('getAllPages', getAllPages);
store.registerAction('getPage', getPage);
store.registerAction('getAllPosts', getAllPosts);
store.registerAction('getRecentPosts', getRecentPosts);
store.registerAction('getPost', getAllPosts);
