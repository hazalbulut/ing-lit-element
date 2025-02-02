import { $, expect } from "@wdio/globals";
import { DeleteModal } from "./delete-modal";
import { html, render } from "lit";
import sinon from "sinon";

describe("DeleteModal Component", () => {
  let onConfirmSpy: sinon.SinonSpy;
  let onCancelSpy: sinon.SinonSpy;
  beforeEach(async () => {
    try {
      onConfirmSpy = sinon.spy();
      onCancelSpy = sinon.spy();

      document.body.innerHTML = "";

      render(html`<delete-modal id="modal"></delete-modal>`, document.body);
      await customElements.whenDefined("delete-modal");

      const element = document.getElementById("modal") as DeleteModal;
      if (!element) {
        throw new Error("DeleteModal bileşeni bulunamadı!");
      }

      if (!(element instanceof DeleteModal)) {
        throw new Error("DeleteModal, LitElement değil!");
      }

      element.onConfirm = onConfirmSpy;
      element.onCancel = onCancelSpy;
      await element.updateComplete;
    } catch (error) {
      console.error("beforeEach hata verdi:", error);
      throw error;
    }
  });

  it("should render the modal with correct content", async () => {
    const modalTitle = await $("h2.modal-title");
    const modalContent = await $(".modal-content");
    console.log("modal-title", modalTitle);
    expect(await modalTitle.getText()).toBe("Are you sure?");
    expect(await modalContent.getText()).toBe("This action cannot be undone.");
  });

  afterEach(() => {
    sinon.restore();
    const modalContainer = document.getElementById("modal")?.parentElement;
    if (modalContainer) {
      modalContainer.remove();
    }
  });
});
