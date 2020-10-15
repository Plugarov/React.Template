import { createAction } from 'redux-actions';
import { ICustomer } from '../../types/customer'

enum Type {
    ADD_CUSTOMER = 'ADD_CUSTOMER'
}

const addCustomer = createAction<ICustomer>(Type.ADD_CUSTOMER);

export const CustomerActions = {
    Type,

    addCustomer,
}
