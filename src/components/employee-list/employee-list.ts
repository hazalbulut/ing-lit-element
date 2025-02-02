import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { store } from "../../store/store";
import { setViewMode, deleteEmployee } from "../../store/actions";
import { Employee } from "../../models/employee.model";
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

    .search-box {
      flex: 1;
      max-width: 300px;
    }

    .search-box input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
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

    /* Table View Styles */
    .table-view {
      width: 100%;
      border-collapse: collapse;
    }

    .table-view th,
    .table-view td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }

    .table-view th {
      background: var(--secondary-color);
    }

    /* List View Styles */
    .list-view {
      display: grid;
      gap: 1rem;
    }

    .list-item {
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      display: grid;
      gap: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    .edit-btn {
      color: var(--primary-color);
      cursor: pointer;
    }

    .delete-btn {
      color: #ff4444;
      cursor: pointer;
    }

    .pagination {
      display: flex;
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

    .pagination button.active {
      background: var(--primary-color);
      color: white;
    }

    @media (max-width: 768px) {
      .controls {
        flex-direction: column;
        align-items: stretch;
      }

      .search-box {
        max-width: none;
      }

      .table-view {
        display: none;
      }

      .list-view {
        display: grid;
      }
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = store.subscribe(() => this.stateChanged());
    this.stateChanged();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private stateChanged() {
    const state = store.getState();
    this.employees = state.employees;
    this.viewMode = state.viewMode;
    this.filterEmployees();
  }

  private filterEmployees() {
    this.filteredEmployees = this.employees.filter((emp) =>
      Object.values(emp).some((value) =>
        value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }

  private handleSearch(e: InputEvent) {
    this.searchQuery = (e.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.filterEmployees();
  }

  private handleViewModeChange(mode: "table" | "list") {
    store.dispatch(setViewMode(mode));
  }

  private handleDelete(id: string) {
    this.selectedEmployeeId = id;
    this.showDeleteModal = true;
  }

  private confirmDelete() {
    if (this.selectedEmployeeId) {
      store.dispatch(deleteEmployee(this.selectedEmployeeId));
      this.showDeleteModal = false;
      this.selectedEmployeeId = null;
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
        <div class="search-box">
          <input
            type="text"
            .value=${this.searchQuery}
            @input=${this.handleSearch}
            placeholder=${msg("Search")}
          />
        </div>
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

      ${this.viewMode === "table"
        ? this.renderTableView(paginatedEmployees)
        : this.renderListView(paginatedEmployees)}
      ${this.renderPagination()} ${this.renderDeleteModal()}
    `;
  }

  private renderTableView(employees: Employee[]) {
    return html`
      <table class="table-view">
        <thead>
          <tr>
            <th>${msg("First Name")}</th>
            <th>${msg("Last Name")}</th>
            <th>${msg("Email")}</th>
            <th>${msg("Department")}</th>
            <th>${msg("Position")}</th>
            <th>${msg("Actions")}</th>
          </tr>
        </thead>
        <tbody>
          ${employees.map((emp) => this.renderTableRow(emp))}
        </tbody>
      </table>
    `;
  }

  private renderTableRow(employee: Employee) {
    return html`
      <tr class="employee-row" data-id=${employee.id}>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.department}</td>
        <td>${employee.position}</td>
        <td>
          <div class="actions">
            <a href="/employees/edit/${employee.id}" class="edit-btn">
              ${msg("Edit")}
            </a>
            <button
              @click=${() => this.handleDelete(employee.id)}
              class="delete-btn"
            >
              ${msg("Delete")}
            </button>
          </div>
        </td>
      </tr>
    `;
  }

  private renderListView(employees: Employee[]) {
    return html`
      <div class="list-view">
        ${employees.map(
          (employee) => html`
            <div class="list-item">
              <div>
                <strong>${employee.firstName} ${employee.lastName}</strong>
              </div>
              <div>${employee.department} - ${employee.position}</div>
              <div>${employee.dateOfEmployment}</div>
              <div class="actions">
                <a href="/employees/edit/${employee.id}" class="edit-btn">
                  ${msg("Edit")}
                </a>
                <button
                  @click=${() => this.handleDelete(employee.id)}
                  class="delete-btn"
                >
                  ${msg("Delete")}
                </button>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  private renderPagination() {
    return html`
      <div class="pagination">
        <button
          ?disabled=${this.currentPage === 1}
          @click=${() => this.currentPage--}
        >
          ←
        </button>
        ${Array.from({ length: this.totalPages }, (_, i) => i + 1).map(
          (page) => html`
            <button
              class=${page === this.currentPage ? "active" : ""}
              @click=${() => (this.currentPage = page)}
            >
              ${page}
            </button>
          `
        )}
        <button
          ?disabled=${this.currentPage === this.totalPages}
          @click=${() => this.currentPage++}
        >
          →
        </button>
      </div>
    `;
  }

  private renderDeleteModal() {
    if (!this.showDeleteModal) return null;

    return html`
      <delete-modal
        .onConfirm=${() => this.confirmDelete()}
        .onCancel=${() => (this.showDeleteModal = false)}
      ></delete-modal>
    `;
  }
}
