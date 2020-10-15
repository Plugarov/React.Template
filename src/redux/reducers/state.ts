import { ICustomer } from "../../types/customer";

export interface IRootState {
    router: any,
    customers: ICustomer[],
}