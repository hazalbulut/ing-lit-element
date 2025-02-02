import { expect } from "@wdio/globals";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  addEmployee,
  updateEmployee,
} from "./actions";
import { Employee } from "../models/employee.model";

describe("Employee Actions", () => {
  it("should create an addEmployee action", () => {
    const employee: Omit<Employee, "id"> = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      dateOfEmployment: "2022-01-01",
      dateOfBirth: "1990-01-01",
      department: "Tech",
      position: "Junior",
    };

    const action = addEmployee(employee);
    expect(action.type).toBe(ADD_EMPLOYEE);
    expect(action.payload).toMatchObject(employee);
    expect(typeof action.payload.id).toBe("string");
  });

  it("should create an updateEmployee action", () => {
    const employee: Employee = {
      id: "1",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      phoneNumber: "9876543210",
      dateOfEmployment: "2021-06-15",
      dateOfBirth: "1992-03-25",
      department: "Tech",
      position: "Junior",
    };

    const action = updateEmployee(employee);
    expect(action.type).toBe(UPDATE_EMPLOYEE);
    expect(action.payload).toEqual(employee);
  });
});
