import { Employee } from "../models/employee.model";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_VIEW_MODE,
  SET_LANGUAGE,
  EmployeeAction,
  SET_MODAL,
  SET_SELECTED_EMPLOYEE,
} from "./actions";
import { setLocale } from "../config/localization";

export interface AppState {
  employees: Employee[];
  viewMode: "table" | "list";
  language: "en" | "tr";
  showDeleteModal: boolean;
  selectedEmployee: string | null;
}

const initialState: AppState = {
  employees: [],
  viewMode: "table",
  language: (document.documentElement.lang as "en" | "tr") || "en",
  selectedEmployee: null,
  showDeleteModal: false,
};

// Load state from localStorage if available
const savedState = localStorage.getItem("appState");
const persistedState = savedState ? JSON.parse(savedState) : initialState;

export const rootReducer = (
  state = persistedState,
  action: EmployeeAction
): AppState => {
  const newState = {
    employees: employeesReducer(state.employees, action),
    viewMode: viewModeReducer(state.viewMode, action),
    showDeleteModal: modalReducer(state.showDeleteModal, action),
    selectedEmployee: selectedEmployeeReducer(state.selectedEmployee, action),
    language: languageReducer(state.language, action),
  };

  // Save state to localStorage
  localStorage.setItem("appState", JSON.stringify(newState));
  return newState;
};

const employeesReducer = (
  state: Employee[] = [],
  action: EmployeeAction
): Employee[] => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];

    case UPDATE_EMPLOYEE:
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    case DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);

    default:
      return state;
  }
};

const viewModeReducer = (
  state: "table" | "list" = "table",
  action: EmployeeAction
): "table" | "list" => {
  if (action.type === SET_VIEW_MODE) {
    return action.payload;
  }
  return state;
};

const modalReducer = (
  state: boolean = false,
  action: EmployeeAction
): boolean => {
  if (action.type === SET_MODAL) {
    return action.payload;
  }
  return state;
};

const selectedEmployeeReducer = (
  state: string,
  action: EmployeeAction
): string | null => {
  if (action.type === SET_SELECTED_EMPLOYEE) {
    return action.payload;
  }
  return state;
};

const languageReducer = (
  state: "en" | "tr" = "en",
  action: EmployeeAction
): "en" | "tr" => {
  if (action.type === SET_LANGUAGE) {
    const newLang = action.payload;
    document.documentElement.lang = newLang;
    setLocale(newLang); // Update lit-localize
    return newLang;
  }
  return state;
};
