import { Employee } from "../models/employee.model";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const SET_VIEW_MODE = "SET_VIEW_MODE";
export const SET_MODAL = "SET_MODAL";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_SELECTED_EMPLOYEE = "SET_SELECTED_EMPLOYEE";

export const addEmployee = (employee: Omit<Employee, "id">) => ({
  type: ADD_EMPLOYEE as typeof ADD_EMPLOYEE,
  payload: {
    ...employee,
    id: crypto.randomUUID(), // Benzersiz ID oluşturuyoruz
  },
});

export const updateEmployee = (employee: Employee) => ({
  type: UPDATE_EMPLOYEE as typeof UPDATE_EMPLOYEE,
  payload: employee,
});

export const deleteEmployee = (id: string) => ({
  type: DELETE_EMPLOYEE as typeof DELETE_EMPLOYEE,
  payload: id,
});

export const setViewMode = (mode: "table" | "list") => ({
  type: SET_VIEW_MODE as typeof SET_VIEW_MODE,
  payload: mode,
});

export const setModal = (showDeleteModal: boolean) => ({
  type: SET_MODAL as typeof SET_MODAL,
  payload: showDeleteModal,
});

export const setSelectedEmployee = (selectedEmployee: string | null) => ({
  type: SET_SELECTED_EMPLOYEE as typeof SET_SELECTED_EMPLOYEE,
  payload: selectedEmployee,
});

export const setLanguage = (language: "en" | "tr") => ({
  type: SET_LANGUAGE as typeof SET_LANGUAGE,
  payload: language,
});

export type EmployeeAction =
  | ReturnType<typeof addEmployee>
  | ReturnType<typeof updateEmployee>
  | ReturnType<typeof deleteEmployee>
  | ReturnType<typeof setModal>
  | ReturnType<typeof setViewMode>
  | ReturnType<typeof setSelectedEmployee>
  | ReturnType<typeof setLanguage>;
