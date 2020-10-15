import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IRootState } from './state';
import { CustomerReducer } from './customer'

const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
    customers: CustomerReducer as any,
});

export default rootReducer;