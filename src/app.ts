import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@vaadin/router";
import { setLocale } from "./config/localization";

import "./components/nav-menu/nav-menu";
import "./components/employee-list/employee-list";
import "./components/employee-form/employee-form";
import "./components/delete-modal/delete-modal";

@customElement("app-root")
export class App extends LitElement {
  static override readonly styles = css`
    :host {
      display: block;
      min-height: 100vh;
      --primary-color: #e86f37;
      --secondary-color: #f5f5f5;
      --text-color: #333333;
      --border-color: #dddddd;
    }

    main {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      main {
        padding: 10px;
      }
    }
  `;

  override firstUpdated() {
    const router = new Router(this.renderRoot?.querySelector("#outlet"));

    router.setRoutes([
      { path: "/", redirect: "/employees" },
      { path: "/employees", component: "employee-list" },
      { path: "/employees/add", component: "employee-form" },
      { path: "/employees/edit/:id", component: "employee-form" },
    ]);

    // Set initial language from HTML lang attribute
    const lang = (document.documentElement.lang as "en" | "tr") || "en";
    setLocale(lang);
  }

  override render() {
    return html`
      <nav-menu></nav-menu>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}
