import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Employee } from "../../models/employee.model";
import { msg } from "@lit/localize";

@customElement("employee-list-view")
export class EmployeeListView extends LitElement {
  @property({ type: Array }) employees: Employee[] = [];
  @property({ type: Function }) onDelete!: (id: string) => void;

  static override readonly styles = css`
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
    @media (max-width: 768px) {
      .list-view {
        display: grid;
      }
    }
  `;

  override render() {
    return html`
      <div class="list-view">
        ${this.employees.map(
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
                  @click=${() => this.onDelete(employee.id)}
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
}
