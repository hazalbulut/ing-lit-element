import { Employee } from '../models/employee.model';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const SET_VIEW_MODE = 'SET_VIEW_MODE';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const addEmployee = (employee: Omit<Employee, 'id'>) => ({
  type: ADD_EMPLOYEE as typeof ADD_EMPLOYEE,
  payload: {
    ...employee,
    id: crypto.randomUUID() // Benzersiz ID oluşturuyoruz
  }
});

export const updateEmployee = (employee: Employee) => ({
  type: UPDATE_EMPLOYEE as typeof UPDATE_EMPLOYEE,
  payload: employee
});

export const deleteEmployee = (id: string) => ({
  type: DELETE_EMPLOYEE as typeof DELETE_EMPLOYEE,
  payload: id
});

export const setViewMode = (mode: 'table' | 'list') => ({
  type: SET_VIEW_MODE as typeof SET_VIEW_MODE,
  payload: mode
});

export const setLanguage = (language: 'en' | 'tr') => ({
  type: SET_LANGUAGE as typeof SET_LANGUAGE,
  payload: language
});

export type EmployeeAction = 
  | ReturnType<typeof addEmployee>
  | ReturnType<typeof updateEmployee>
  | ReturnType<typeof deleteEmployee>
  | ReturnType<typeof setViewMode>
  | ReturnType<typeof setLanguage>; 