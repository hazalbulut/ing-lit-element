import { $, expect } from "@wdio/globals";
import { EmployeeForm } from "./employee-form";
import { html, render } from "lit";
import sinon from "sinon";

describe("EmployeeForm Component", () => {
  beforeEach(async () => {
    try {
      document.body.innerHTML = "";

      render(
        html`<employee-form id="employee-form"></employee-form>`,
        document.body
      );

      await customElements.whenDefined("employee-form");

      const element = document.getElementById("employee-form") as EmployeeForm;
      if (!element) {
        throw new Error("EmployeeForm bileşeni bulunamadı!");
      }

      if (!(element instanceof EmployeeForm)) {
        throw new Error("EmployeeForm, LitElement değil!");
      }

      await element.updateComplete;
    } catch (error) {
      console.error("beforeEach hata verdi:", error);
      throw error;
    }
  });

  it("should render all form fields correctly", async () => {
    expect(await $("#firstName")).not.toBeNull();
    expect(await $("#lastName")).not.toBeNull();
    expect(await $("#email")).not.toBeNull();
    expect(await $("#phoneNumber")).not.toBeNull();
    expect(await $("#dateOfEmployment")).not.toBeNull();
    expect(await $("#dateOfBirth")).not.toBeNull();
    expect(await $("#department")).not.toBeNull();
    expect(await $("#position")).not.toBeNull();
  });

  afterEach(() => {
    sinon.restore();
    const component = document.getElementById("employee-form");
    if (component) {
      component.remove();
    }
  });
});
