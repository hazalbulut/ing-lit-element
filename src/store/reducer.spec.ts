import { rootReducer, AppState } from "./reducers";
import { expect } from "@wdio/globals";
import { DELETE_EMPLOYEE } from "./actions";

describe("Root Reducer", () => {
  let initialState: AppState;

  beforeEach(() => {
    initialState = {
      employees: [],
      viewMode: "table",
      language: "en",
      showDeleteModal: false,
      selectedEmployee: null,
    };
  });

  it("should handle DELETE_EMPLOYEE", () => {
    initialState.employees = [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phoneNumber: "123",
        dateOfEmployment: "2022-01-01",
        dateOfBirth: "1990-01-01",
        department: "Tech",
        position: "Junior",
      },
    ];

    const action = { type: DELETE_EMPLOYEE, payload: "1" };
    const newState = rootReducer(initialState, action);
    expect(newState.employees.length).toBe(0);
  });
});
