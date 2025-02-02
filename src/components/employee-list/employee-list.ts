import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { store } from "../../store/store";
import {
  setViewMode,
  deleteEmployee,
  setModal,
  setSelectedEmployee,
} from "../../store/actions";
import { Employee } from "../../models/employee.model";
import "../employee-search/employee-search";
import "../employee-list-view/employee-list-view";
import "../employee-table-view/employee-table-view";
import "../pagination/pagination";
@localized()
@customElement("employee-list")
export class EmployeeList extends LitElement {
  @state() private employees: Employee[] = [];
  @state() private filteredEmployees: Employee[] = [];
  @state() private currentPage = 1;
  @state() private searchQuery = "";
  @state() private viewMode: "table" | "list" = "table";
  @state() private showDeleteModal = false;
  @state() private selectedEmployeeId: string | null = null;

  private readonly PAGE_SIZE = 2;
  private unsubscribe?: () => void;

  static override readonly styles = css`
    :host {
      display: block;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .view-controls button {
      padding: 0.5rem 1rem;
      background: none;
      border: 1px solid var(--border-color);
      cursor: pointer;
    }

    .view-controls button.active {
      background: var(--primary-color);
      color: white;
    }
    .view-container {
      overflow-x: auto;
    }
    @media (max-width: 768px) {
      .controls {
        flex-direction: column;
        align-items: stretch;
      }
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = store.subscribe(() => this.stateChanged());
    this.stateChanged();
    store.dispatch(setModal(false));
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private stateChanged() {
    const state = store.getState();
    this.employees = state.employees;
    this.viewMode = state.viewMode;
    this.showDeleteModal = state.showDeleteModal;
    this.selectedEmployeeId = state.selectedEmployee;
    this.filterEmployees();
  }

  private filterEmployees() {
    this.filteredEmployees = this.employees.filter((emp) =>
      Object.values(emp).some((value) =>
        value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }

  private handleSearchUpdate(event: CustomEvent) {
    this.searchQuery = event.detail.query;
    this.currentPage = 1;
    this.filterEmployees();
  }

  private handleViewModeChange(mode: "table" | "list") {
    store.dispatch(setViewMode(mode));
  }

  private handleDelete(id: string) {
    this.selectedEmployeeId = id;
    store.dispatch(setSelectedEmployee(this.selectedEmployeeId));
    this.showDeleteModal = true;
    store.dispatch(setModal(this.showDeleteModal));
  }

  private confirmDelete() {
    if (this.selectedEmployeeId) {
      store.dispatch(deleteEmployee(this.selectedEmployeeId));
      this.showDeleteModal = false;
      store.dispatch(setModal(this.showDeleteModal));
      this.selectedEmployeeId = null;
      store.dispatch(setSelectedEmployee(this.selectedEmployeeId));
    }
  }

  private getPaginatedEmployees() {
    const start = (this.currentPage - 1) * this.PAGE_SIZE;
    return this.filteredEmployees.slice(start, start + this.PAGE_SIZE);
  }

  private get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.PAGE_SIZE);
  }

  override render() {
    if (this.employees.length === 0) {
      return html`<p class="empty-message">${msg("No employees found")}</p>`;
    }
    const paginatedEmployees = this.getPaginatedEmployees();
    return html`
      <div class="controls">
        <employee-search
          @search-updated=${this.handleSearchUpdate}
        ></employee-search>
        <div class="view-controls">
          <button
            class=${this.viewMode === "table" ? "active" : ""}
            @click=${() => this.handleViewModeChange("table")}
          >
            ${msg("Table")}
          </button>
          <button
            class=${this.viewMode === "list" ? "active" : ""}
            @click=${() => this.handleViewModeChange("list")}
          >
            ${msg("List")}
          </button>
        </div>
      </div>
      <div class="view-container">
        ${this.viewMode === "table"
          ? html`<employee-table-view
              .employees=${paginatedEmployees}
              .onDelete=${this.handleDelete}
            ></employee-table-view> `
          : html`<employee-list-view
              .employees=${paginatedEmployees}
              .onDelete=${this.handleDelete}
            ></employee-list-view> `}
        ${this.renderPagination()}
        <delete-modal
          ?hidden=${!this.showDeleteModal}
          .onConfirm=${() => this.confirmDelete()}
          .onCancel=${() => {
            this.showDeleteModal = false;
            store.dispatch(setModal(this.showDeleteModal));
            this.requestUpdate();
          }}
        ></delete-modal>
      </div>
    `;
  }

  private renderPagination() {
    return html`<employee-pagination
      .currentPage=${this.currentPage}
      .totalPages=${this.totalPages}
      .onPageChange=${(page: number) => (this.currentPage = page)}
    ></employee-pagination> `;
  }
}
