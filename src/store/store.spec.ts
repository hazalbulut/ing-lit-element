import { dispatch, getState } from "./store";
import { expect } from "@wdio/globals";
import { addEmployee, updateEmployee } from "./actions";
import { Employee } from "../models/employee.model";

describe("Redux Store", () => {
  let testEmployee: Employee;

  beforeEach(() => {
    testEmployee = {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      dateOfEmployment: "2022-01-01",
      dateOfBirth: "1990-01-01",
      department: "Tech",
      position: "Junior",
    };
  });

  it("should update an existing employee in the store", () => {
    dispatch(addEmployee(testEmployee));
    const updatedEmployee = { ...testEmployee, lastName: "Doe" };
    dispatch(updateEmployee(updatedEmployee));
    const state = getState();
    expect(state.employees[0].lastName).toBe("Doe");
  });
});
