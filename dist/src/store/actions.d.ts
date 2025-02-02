import { Employee } from '../models/employee.model';
export declare const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export declare const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export declare const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export declare const SET_VIEW_MODE = "SET_VIEW_MODE";
export declare const SET_LANGUAGE = "SET_LANGUAGE";
export declare const addEmployee: (employee: Omit<Employee, "id">) => {
    type: typeof ADD_EMPLOYEE;
    payload: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        firstName: string;
        lastName: string;
        dateOfEmployment: string;
        dateOfBirth: string;
        phoneNumber: string;
        email: string;
        department: import("../models/employee.model").Department;
        position: import("../models/employee.model").Position;
    };
};
export declare const updateEmployee: (employee: Employee) => {
    type: typeof UPDATE_EMPLOYEE;
    payload: Employee;
};
export declare const deleteEmployee: (id: string) => {
    type: typeof DELETE_EMPLOYEE;
    payload: string;
};
export declare const setViewMode: (mode: "table" | "list") => {
    type: typeof SET_VIEW_MODE;
    payload: "table" | "list";
};
export declare const setLanguage: (language: "en" | "tr") => {
    type: typeof SET_LANGUAGE;
    payload: "tr" | "en";
};
export type EmployeeAction = ReturnType<typeof addEmployee> | ReturnType<typeof updateEmployee> | ReturnType<typeof deleteEmployee> | ReturnType<typeof setViewMode> | ReturnType<typeof setLanguage>;
//# sourceMappingURL=actions.d.ts.map