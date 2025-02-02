import { $$, expect } from "@wdio/globals";
import { EmployeeTableView } from "./employee-table-view";
import { html, render } from "lit";
import sinon from "sinon";

describe("EmployeeTableView Component", () => {
  let onDeleteSpy: sinon.SinonSpy;

  beforeEach(async () => {
    try {
      onDeleteSpy = sinon.spy();
      document.body.innerHTML = "";

      const employees = [
        {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          department: "Engineering",
          position: "Software Engineer",
          dateOfEmployment: "2022-01-01",
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Smith",
          department: "Marketing",
          position: "Marketing Manager",
          dateOfEmployment: "2020-06-15",
        },
      ];

      render(
        html`<employee-table-view
          id="employee-table-view"
          .employees=${employees}
          .onDelete=${onDeleteSpy}
        ></employee-table-view>`,
        document.body
      );
      await customElements.whenDefined("employee-table-view");

      const element = document.getElementById(
        "employee-table-view"
      ) as EmployeeTableView;
      if (!element) {
        throw new Error("EmployeeTableView bileşeni bulunamadı!");
      }

      if (!(element instanceof EmployeeTableView)) {
        throw new Error("DeleteModal, LitElement değil!");
      }

      await element.updateComplete;
    } catch (error) {
      console.error("beforeEach hata verdi:", error);
      throw error;
    }
  });

  it("should render the employee table correctly", async () => {
    const tableItems = await $$(".table-item");
    expect(tableItems.length).toBe(2);

    const firstEmployee = await tableItems[0].$("td:first-child");
    expect(await firstEmployee.getText()).toBe("John");

    const secondEmployee = await tableItems[1].$("td:first-child");
    expect(await secondEmployee.getText()).toBe("Jane");
  });

  afterEach(() => {
    sinon.restore();
    const component = document.getElementById("employee-table-view");
    if (component) {
      component.remove();
    }
  });
});
