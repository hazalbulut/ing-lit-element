import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("employee-pagination")
export class EmployeePagination extends LitElement {
  @property({ type: Number }) currentPage = 1;
  @property({ type: Number }) totalPages = 1;
  @property({ type: Function }) onPageChange!: (page: number) => void;

  static override readonly styles = css`
    .pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .pagination button {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color);
      background: none;
      cursor: pointer;
    }
    .pagination-container {
      display: flex;
      justify-content: center;
      position: relative;
    }
    .pagination-container .pagination {
      position: fixed;
    }
    .pagination-container .pagination button.active {
      background: var(--primary-color);
      color: white;
    }
  `;

  override render() {
    return html`
      <div class="pagination-container">
        <div class="pagination">
          <button
            ?disabled=${this.currentPage === 1}
            @click=${() => this.onPageChange(this.currentPage - 1)}
          >
            ←
          </button>
          ${Array.from({ length: this.totalPages }, (_, i) => i + 1).map(
            (page) => html`
              <button
                class=${page === this.currentPage ? "active" : ""}
                @click=${() => this.onPageChange(page)}
              >
                ${page}
              </button>
            `
          )}
          <button
            ?disabled=${this.currentPage === this.totalPages}
            @click=${() => this.onPageChange(this.currentPage + 1)}
          >
            →
          </button>
        </div>
      </div>
    `;
  }
}
