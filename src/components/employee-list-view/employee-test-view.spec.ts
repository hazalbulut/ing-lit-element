import { $$, expect } from "@wdio/globals";
import { EmployeeListView } from "./employee-list-view";
import { html, render } from "lit";
import sinon from "sinon";

describe("EmployeeListView Component", () => {
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
        html`<employee-list-view
          id="employee-list-view"
          .employees=${employees}
          .onDelete=${onDeleteSpy}
        ></employee-list-view>`,
        document.body
      );
      await customElements.whenDefined("employee-list-view");

      const element = document.getElementById(
        "employee-list-view"
      ) as EmployeeListView;
      if (!element) {
        throw new Error("EmployeeListView bileşeni bulunamadı!");
      }

      if (!(element instanceof EmployeeListView)) {
        throw new Error("DeleteModal, LitElement değil!");
      }

      await element.updateComplete;
    } catch (error) {
      console.error("beforeEach hata verdi:", error);
      throw error;
    }
  });

  it("should render the employee list correctly", async () => {
    const listItems = await $$(".list-item");
    expect(listItems.length).toBe(2);

    const firstEmployee = await listItems[0].$("strong");
    expect(await firstEmployee.getText()).toBe("John Doe");
  });

  afterEach(() => {
    sinon.restore();
    const component = document.getElementById("employee-list-view");
    if (component) {
      component.remove();
    }
  });
});
