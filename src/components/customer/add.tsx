import React from 'react';
import { ICustomer } from '../../types/customer';

interface ICustomerAddFormProps {
    handleSubmit(values: ICustomer): void,
    handleError(error: any): void,
}

function CustomerAdd(props: ICustomerAddFormProps) {
    function onAdd(): void {

        props.handleSubmit({ id: 5, name: '5' });
    }

    return (
        <>
            <div className="row">
                <form className="col s6">
                    <div className="input-field">
                        <input id="first_name" type="text" />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field">
                        <input id="last_name" type="text" />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </form>
            </div>
            <button className="btn waves-effect waves-light" type="submit" onClick={onAdd}>add</button>
        </>
    )
}

export default CustomerAdd
