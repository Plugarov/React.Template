import { handleActions } from 'redux-actions';
import { ICustomer } from '../../types/customer';
import { CustomerActions } from '../actions/customer';

const initialState: ICustomer[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Guest" },
]

export const CustomerReducer = handleActions<ICustomer[], ICustomer>({
    [CustomerActions.Type.ADD_CUSTOMER]: (state, action) => {
     
        return [...state, action.payload]
    }
}, initialState);