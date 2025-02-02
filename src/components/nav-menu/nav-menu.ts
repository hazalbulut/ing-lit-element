import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { store } from "../../store/store";
import { setLanguage } from "../../store/actions";
import { BaseElement } from "../base-element";
import { setLocale } from "../../config/localization";
@localized()
@customElement("nav-menu")
export class NavMenu extends BaseElement {
  @state() public currentLanguage: "en" | "tr" = "en";

  public unsubscribe?: () => void;

  override connectedCallback() {
    super.connectedCallback();

    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (this.currentLanguage !== state.language) {
        this.currentLanguage = state.language;
        this.requestUpdate();
      }
    });
    this.currentLanguage = store.getState().language;
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private async onLanguageSelect(e: Event) {
    const select = e.target as HTMLSelectElement;
    const newLang = select.value as "en" | "tr";

    await setLocale(newLang);

    store.dispatch(setLanguage(newLang));

    window.dispatchEvent(new CustomEvent("language-changed"));
  }

  static override readonly styles = css`
    nav {
      background: var(--primary-color);
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      text-decoration: none;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .add-employee-btn {
      background: white;
      color: var(--primary-color);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
    }

    .language-selector {
      color: white;
      background: transparent;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .language-selector option {
      color: black;
    }
  `;

  override render() {
    return html`
      <nav>
        <a href="/" class="logo">${msg("Employee Manager")}</a>
        <div class="nav-actions">
          <a href="/employees/add" class="add-employee-btn">
            ${msg("New Employee")}
          </a>
          <select
            class="language-selector"
            @change=${this.onLanguageSelect}
            .value=${this.currentLanguage}
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </nav>
    `;
  }
}
