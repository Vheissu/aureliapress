import { Container } from 'aurelia-framework';
import { Store } from 'aurelia-store';
import { State } from './state';

const store: Store<State> = Container.instance.get(Store);

export default store;
