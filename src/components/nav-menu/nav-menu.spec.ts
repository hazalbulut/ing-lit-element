import { $, expect } from "@wdio/globals";
import { NavMenu } from "./nav-menu"; // Your NavMenu component
import { html, render } from "lit";
import sinon from "sinon"; // Sinon for spies
import { AppState } from "../../store/reducers";
import { store } from "../../store/store";

describe("Lit component testing", () => {
  let requestUpdateSpy: sinon.SinonSpy;

  beforeEach(async () => {
    // Mock the store state and subscribe method
    render(html`<nav-menu id="root"></nav-menu>`, document.body);
    sinon.stub(store, "getState").returns({ language: "en" } as AppState); // Initial state with 'en' language
    sinon.stub(store, "subscribe").callsFake((callback) => {
      // Simulate store subscription and trigger the callback immediately
      callback();
      return () => {}; // Return unsubscribe function
    });

    // Get the instance of the Lit component
    const element = document.getElementById("root") as NavMenu;
    requestUpdateSpy = sinon.spy(element, "requestUpdate");
    // component = document.querySelector("nav-menu") as NavMenu;
    //  component.updateComplete; // Wait for the updateComplete promise

    // Spy on requestUpdate to verify if it gets called
    // console.log("----------------COMPONENT------------------", component);
    // requestUpdateSpy = sinon.spy(component, "requestUpdate");
  });

  it("should render the language selector with correct options", async () => {
    // Ensure the language selector is visible and the default value is "en"
    const languageSelector = await $("select.language-selector");

    // Wait for the language selector to be displayed
    await languageSelector.waitForDisplayed();

    // Verify if the language selector is displayed and its value
    expect(await languageSelector.isDisplayed()).toBe(true);
    expect(await languageSelector.getValue()).toBe("en"); // Default value
  });

  afterEach(() => {
    // Clean up spies and stubs after each test
    if (requestUpdateSpy) {
      requestUpdateSpy.restore(); // Only restore if the spy was created
    }
    sinon.restore(); // Restore all stubbed methods
  });
});
