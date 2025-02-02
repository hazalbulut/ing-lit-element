import { $, expect } from "@wdio/globals";
import { NavMenu } from "./nav-menu";
import { html, render } from "lit";
import sinon from "sinon";
import { AppState } from "../../store/reducers";
import { store } from "../../store/store";

describe("Lit component testing", () => {
  let requestUpdateSpy: sinon.SinonSpy;

  beforeEach(async () => {
    document.body.innerHTML = "";

    render(html`<nav-menu id="root"></nav-menu>`, document.body);

    await customElements.whenDefined("nav-menu");

    const element = document.getElementById("root") as NavMenu;
    if (!element) {
      throw new Error("NavMenu bileşeni bulunamadı!");
    }

    if (!(element instanceof NavMenu)) {
      throw new Error("NavMenu, LitElement değil!");
    }
    sinon.stub(store, "getState").returns({ language: "en" } as AppState);
    sinon.stub(store, "subscribe").callsFake((callback) => {
      callback();
      return () => {};
    });

    await element.updateComplete;

    requestUpdateSpy = sinon.spy(element, "requestUpdate");
  });

  it("should render the language selector with correct options", async () => {
    const languageSelector = await $("select.language-selector");

    await languageSelector.waitForDisplayed();

    expect(await languageSelector.isDisplayed()).toBe(true);
    expect(await languageSelector.getValue()).toBe("en");
  });

  afterEach(() => {
    if (requestUpdateSpy) {
      requestUpdateSpy.restore();
    }
    sinon.restore();
  });
});
