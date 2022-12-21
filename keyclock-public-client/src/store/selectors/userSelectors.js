import {get} from 'lodash';
export const userSelectors = state => get(state, 'user.user', null);
export const activeAccountSelectors = state => get(state, 'user.activeAccount', null);
export const userTokenSelectors = state => get(state, 'user.token', null);
export const isAuthenticated = state => get(state, 'user.isAuthenticated', null);
