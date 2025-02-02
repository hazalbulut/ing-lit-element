import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { msg } from "@lit/localize";
import { Router } from "@vaadin/router";
import { store } from "../../store/store";
import { addEmployee, updateEmployee } from "../../store/actions";
import { Employee, Departments, Positions } from "../../models/employee.model";
import { Validator, ValidationError } from "../../utils/validation";
import { BaseElement } from "../base-element";

@customElement("employee-form")
export class EmployeeForm extends BaseElement {
  @property({ type: String }) location?: string;
  @state() private employeeId: string = "";

  @state() private employee: Partial<Employee> = {
    firstName: "",
    lastName: "",
    dateOfEmployment: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    department: undefined,
    position: undefined,
  };

  @state() private errors: ValidationError[] = [];
  @state() private isEdit = false;

  private unsubscribe?: () => void;

  override async connectedCallback() {
    super.connectedCallback();

    // Get ID from URL
    const path = window.location.pathname;
    const matches = path.match(/\/employees\/edit\/(.+)/);
    if (matches && matches[1]) {
      this.employeeId = matches[1];
      this.isEdit = true;

      // Get employee data from store
      const currentEmployee = store
        .getState()
        .employees.find((emp) => emp.id === this.employeeId);

      if (currentEmployee) {
        this.employee = { ...currentEmployee };
        this.requestUpdate();
      }
    }

    // Subscribe to store changes
    this.unsubscribe = store.subscribe(() => {
      if (this.isEdit) {
        const currentEmployee = store
          .getState()
          .employees.find((emp) => emp.id === this.employeeId);
        if (currentEmployee) {
          this.employee = { ...currentEmployee };
          this.requestUpdate();
        }
      }
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  private validateField(field: keyof Employee, value: string) {
    console.log(field, value);

    const validator = new Validator();
    console.log("field", field);

    switch (field) {
      case "email":
        validator.required(value, "email").email(value, "email");
        break;
      case "phoneNumber":
        validator.required(value, "phoneNumber").phone(value, "phoneNumber");
        break;
      case "firstName":
        validator.required(value, "firstName");
        break;
      case "lastName":
        validator.required(value, "lastName");
        break;
      case "dateOfEmployment":
        validator
          .required(value, "dateOfEmployment")
          .date(value, "dateOfEmployment");
        break;
      case "dateOfBirth":
        validator.required(value, "dateOfBirth").date(value, "dateOfBirth");
        break;
      case "department":
        validator.required(value, "department");
        break;
      case "position":
        validator.required(value, "position");
        break;
    }

    // Remove old errors for this field
    this.errors = this.errors.filter((error) => error.field !== field);
    console.log("this.errors", this.errors);

    // Add new errors if any
    if (validator.hasErrors()) {
      this.errors = [...this.errors, ...validator.getErrors()];
    }
  }

  private handleInput(e: Event, field: keyof Employee) {
    const input = e.target as HTMLInputElement | HTMLSelectElement;
    let value = input.value;

    if (field === "phoneNumber") {
      value = value.replace(/\s/g, ""); // Remove spaces from phone number
    }

    this.employee = {
      ...this.employee,
      [field]: value,
    };

    // Validate the field after update
    this.validateField(field, value);
  }

  private handleSubmit(e: Event) {
    e.preventDefault();

    const validator = new Validator();

    // Validate all fields
    validator
      .required(this.employee.firstName, "firstName")
      .required(this.employee.lastName, "lastName")
      .required(this.employee.dateOfEmployment, "dateOfEmployment")
      .required(this.employee.dateOfBirth, "dateOfBirth")
      .required(this.employee.phoneNumber, "phoneNumber")
      .required(this.employee.email, "email")
      .required(this.employee.department, "department")
      .required(this.employee.position, "position")
      .email(this.employee.email ?? "", "email")
      .phone(this.employee.phoneNumber ?? "", "phoneNumber")
      .date(this.employee.dateOfEmployment ?? "", "dateOfEmployment")
      .date(this.employee.dateOfBirth ?? "", "dateOfBirth");

    this.errors = validator.getErrors();

    if (validator.hasErrors()) {
      return;
    }

    if (this.isEdit && this.employeeId) {
      store.dispatch(
        updateEmployee({
          ...(this.employee as Employee),
          id: this.employeeId,
        })
      );
    } else {
      store.dispatch(addEmployee(this.employee as Employee));
    }

    Router.go("/employees");
  }

  private getFieldError(fieldName: string): string | undefined {
    return this.errors.find((error) => error.field === fieldName)?.message;
  }

  static override styles = css`
    :host {
      display: block;
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .error {
      color: red;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }

    .save-btn {
      background: var(--primary-color);
      color: white;
    }

    .cancel-btn {
      background: var(--secondary-color);
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      :host {
        padding: 1rem;
      }

      .form-actions {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }
  `;

  override render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <div class="form-group">
          <label for="firstName">${msg("First Name")}</label>
          <input
            type="text"
            id="firstName"
            placeholder=${msg("Enter first name")}
            .value=${this.employee.firstName ?? ""}
            @input=${(e: Event) => this.handleInput(e, "firstName")}
          />
          ${this.getFieldError("firstName") &&
          html`<div class="error">${this.getFieldError("firstName")}</div>`}
        </div>

        <div class="form-group">
          <label for="lastName">${msg("Last Name")}</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            .value=${this.employee.lastName ?? ""}
            @input=${(e: Event) => this.handleInput(e, "lastName")}
          />
          ${this.getFieldError("lastName") &&
          html`<div class="error">${this.getFieldError("lastName")}</div>`}
        </div>

        <div class="form-group">
          <label for="dateOfEmployment">${msg("Date of Employment")}</label>
          <input
            type="date"
            id="dateOfEmployment"
            .value=${this.employee.dateOfEmployment ?? ""}
            @input=${(e: Event) => this.handleInput(e, "dateOfEmployment")}
          />
          ${this.getFieldError("dateOfEmployment") &&
          html`<div class="error">
            ${this.getFieldError("dateOfEmployment")}
          </div>`}
        </div>

        <div class="form-group">
          <label for="dateOfBirth">${msg("Date of Birth")}</label>
          <input
            type="date"
            id="dateOfBirth"
            .value=${this.employee.dateOfBirth ?? ""}
            @input=${(e: Event) => this.handleInput(e, "dateOfBirth")}
          />
          ${this.getFieldError("dateOfBirth") &&
          html`<div class="error">${this.getFieldError("dateOfBirth")}</div>`}
        </div>

        <div class="form-group">
          <label for="phoneNumber">${msg("Phone Number")}</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+905321234567"
            .value=${this.employee.phoneNumber ?? ""}
            @input=${(e: Event) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/\s/g, "");
              this.handleInput(e, "phoneNumber");
            }}
          />
          ${this.getFieldError("phoneNumber") &&
          html`<div class="error">${this.getFieldError("phoneNumber")}</div>`}
        </div>

        <div class="form-group">
          <label for="email">${msg("Email")}</label>
          <input
            type="email"
            id="email"
            placeholder="example@company.com"
            .value=${this.employee.email ?? ""}
            @input=${(e: Event) => this.handleInput(e, "email")}
          />
          ${this.getFieldError("email") &&
          html`<div class="error">${this.getFieldError("email")}</div>`}
        </div>

        <div class="form-group">
          <label for="department">${msg("Department")}</label>
          <select
            id="department"
            .value=${this.employee.department ?? ""}
            @change=${(e: Event) => this.handleInput(e, "department")}
          >
            <option value="" disabled selected>Select department</option>
            ${Departments.map(
              (dept) => html` <option value=${dept}>${dept}</option> `
            )}
          </select>
          ${this.getFieldError("department") &&
          html`<div class="error">${this.getFieldError("department")}</div>`}
        </div>

        <div class="form-group">
          <label for="position">${msg("Position")}</label>
          <select
            id="position"
            .value=${this.employee.position ?? ""}
            @change=${(e: Event) => this.handleInput(e, "position")}
          >
            <option value="" disabled selected>Select position</option>
            ${Positions.map(
              (pos) => html` <option value=${pos}>${pos}</option> `
            )}
          </select>
          ${this.getFieldError("position") &&
          html`<div class="error">${this.getFieldError("position")}</div>`}
        </div>

        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            @click=${() => Router.go("/employees")}
          >
            ${msg("Cancel")}
          </button>
          <button type="submit" class="save-btn">${msg("Save")}</button>
        </div>
      </form>
    `;
  }
}
