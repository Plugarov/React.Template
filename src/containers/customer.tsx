import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import CustomerAdd from '../components/customer/add';
import CustomerList from '../components/customer/list';
import { IRootState } from '../redux/reducers/state';
import { ICustomer } from '../types/customer';
import { CustomerActions } from '../redux/actions/customer'


type CustomerContainerProps = ReturnType<typeof mapDispatchToProps>;
type CustomerContainerState = ReturnType<typeof mapStateToProps>;

function CustomerContainer(state: CustomerContainerState & CustomerContainerProps) {

    return <>
        <CustomerAdd handleSubmit={state.addCustomer} handleError={console.error} />
        <CustomerList customers={state.customers} />
    </>
}

const mapStateToProps = (state: IRootState) => ({
    customers: state.customers
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addCustomer: (payload: ICustomer) => dispatch(CustomerActions.addCustomer(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);