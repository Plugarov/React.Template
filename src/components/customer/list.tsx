import React from 'react';
import { ICustomer } from '../../types/customer';

interface ICustomerListProps {
    customers: ICustomer[]
}

function CustomerList(props: ICustomerListProps) {

    return (
        <>
            <ul>
                {props.customers.map(customer => {
                    return <li key={customer.id}>
                        <p>{customer.name}</p>
                    </li>
                })}
            </ul>
        </>
    )
}

export default CustomerList
