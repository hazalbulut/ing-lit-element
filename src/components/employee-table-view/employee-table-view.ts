import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Employee } from "../../models/employee.model";
import { msg } from "@lit/localize";

@customElement("employee-table-view")
export class EmployeeTableView extends LitElement {
  @property({ type: Array }) employees: Employee[] = [];
  @property({ type: Function }) onDelete!: (id: string) => void;

  static override readonly styles = css`
    :host {
      overflow: scroll;
    }
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
    .actions {
      display: flex;
      gap: 0.5rem;
    }
    .delete-btn {
      color: #ff4444;
      cursor: pointer;
    }
    .edit-btn {
      color: var(--primary-color);
      cursor: pointer;
    }
  `;

  override render() {
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
          ${this.employees.map(
            (employee) => html`
              <tr class="table-item">
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
                      @click=${() => this.onDelete(employee.id)}
                      class="delete-btn"
                    >
                      ${msg("Delete")}
                    </button>
                  </div>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}
