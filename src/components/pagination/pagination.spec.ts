import { $, $$, expect } from "@wdio/globals";
import { EmployeePagination } from "./pagination";
import { html, render } from "lit";
import sinon from "sinon";

describe("EmployeePagination Component", () => {
  let onPageChangeSpy: sinon.SinonSpy;

  beforeEach(async () => {
    try {
      onPageChangeSpy = sinon.spy();
      document.body.innerHTML = "";

      render(
        html`<employee-pagination
          id="employee-pagination"
          .currentPage=${1}
          .totalPages=${1}
          .onPageChange=${onPageChangeSpy}
        ></employee-pagination>`,
        document.body
      );

      await customElements.whenDefined("employee-pagination");

      const element = document.getElementById(
        "employee-pagination"
      ) as EmployeePagination;
      if (!element) {
        throw new Error("EmployeePagination bileşeni bulunamadı!");
      }

      if (!(element instanceof EmployeePagination)) {
        throw new Error("EmployeePagination, LitElement değil!");
      }

      await element.updateComplete;
    } catch (error) {
      console.error("beforeEach hata verdi:", error);
      throw error;
    }
  });

  it("should render pagination buttons correctly", async () => {
    const pageButtons = await $$(".pagination button");
    expect(pageButtons.length).toBe(3); // 5 sayfa + önceki ve sonraki butonları

    const activeButton = await $(".pagination button.active");
    expect(await activeButton.getText()).toBe("1");
  });

  afterEach(() => {
    sinon.restore();
    const component = document.getElementById("employee-pagination");
    if (component) {
      component.remove();
    }
  });
});
