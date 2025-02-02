import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";

@localized()
@customElement("employee-search")
export class EmployeeSearch extends LitElement {
  @state() private searchQuery = "";

  static override readonly styles = css`
    .search-box {
      flex: 1;
      max-width: 300px;
    }

    .search-box input {
      max-width: 100%;
      width: 100%;
      padding: 0.5rem 0;
      border: none;
      border-radius: 4px;
      outline: var(--border-color) solid 2px;
      text-indent: 8px;
    }

    @media (max-width: 768px) {
      .search-box {
        max-width: none;
      }
    }
  `;

  private handleSearch(e: InputEvent) {
    this.searchQuery = (e.target as HTMLInputElement).value;
    this.dispatchEvent(
      new CustomEvent("search-updated", {
        detail: { query: this.searchQuery },
        bubbles: true,
        composed: true,
      })
    );
  }

  override render() {
    return html`
      <div class="search-box">
        <input
          type="text"
          .value=${this.searchQuery}
          @input=${this.handleSearch}
          placeholder=${msg("Search")}
        />
      </div>
    `;
  }
}
