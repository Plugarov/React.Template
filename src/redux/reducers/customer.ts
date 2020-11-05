import { handleActions } from 'redux-actions';
import { ICustomer } from '../../types/customer';
import { CustomerActions } from '../actions/customer';

const initialState: ICustomer[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Guest" },
]

export const CustomerReducer = handleActions<ICustomer[], ICustomer>({
    [CustomerActions.Type.ADD_CUSTOMER]: (state, action) => {
     
        let url = 'http://localhost:4000/weatherforecast'

        let res = fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))

        return [...state, action.payload]
    }
}, initialState);