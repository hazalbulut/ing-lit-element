import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
import { Router } from "@vaadin/router";
import { store } from "../../store/store";
import { addEmployee, updateEmployee } from "../../store/actions";
import { Employee, Departments, Positions } from "../../models/employee.model";
import { Validator, ValidationError } from "../../utils/validation";
import { BaseElement } from "../base-element";

@localized()
@customElement("employee-form")
export class EmployeeForm extends BaseElement {
  @property({ type: String }) location?: string;
  @state() private employeeId: string = "";
  @state() private employee: Partial<Employee> = this.getEmptyEmployee();
  @state() private errors: ValidationError[] = [];
  @state() private isEdit = false;
  private unsubscribe?: () => void;

  override async connectedCallback() {
    super.connectedCallback();
    this.checkEditMode();
    this.subscribeToStore();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  private checkEditMode() {
    const regex = /\/employees\/edit\/(.+)/;
    const matches = regex.exec(window.location.pathname);
    const employeeId = matches?.[1];

    if (employeeId) {
      this.employeeId = employeeId;
      this.isEdit = true;
      this.loadEmployeeFromStore();
    }
  }

  private subscribeToStore() {
    this.unsubscribe = store.subscribe(() => {
      if (this.isEdit) this.loadEmployeeFromStore();
    });
  }

  private loadEmployeeFromStore() {
    const currentEmployee = store
      .getState()
      .employees.find((emp) => emp.id === this.employeeId);
    if (currentEmployee) this.employee = { ...currentEmployee };
  }

  private getEmptyEmployee(): Partial<Employee> {
    return {
      firstName: "",
      lastName: "",
      dateOfEmployment: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      department: undefined,
      position: undefined,
    };
  }

  private handleInput(e: Event, field: keyof Employee) {
    const input = e.target as HTMLInputElement | HTMLSelectElement;
    this.employee = {
      ...this.employee,
      [field]:
        field === "phoneNumber" ? input.value.replace(/\s/g, "") : input.value,
    };
    this.validateField(field, this.employee[field] as string);
  }

  private validateField(field: keyof Employee, value: string) {
    const validator = new Validator();
    validator.required(value, field);
    if (field === "email") validator.email(value, field);
    if (field === "phoneNumber") validator.phone(value, field);
    if (field.includes("date")) validator.date(value, field);
    this.errors = [
      ...this.errors.filter((err) => err.field !== field),
      ...validator.getErrors(),
    ];
  }

  private validateAllFields() {
    const validator = new Validator();
    Object.keys(this.employee).forEach((field) =>
      this.validateField(
        field as keyof Employee,
        this.employee[field as keyof Employee] as string
      )
    );
    return validator;
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    const validator = this.validateAllFields();
    this.errors = validator.getErrors();
    if (validator.hasErrors()) return;
    this.isEdit && this.employeeId
      ? store.dispatch(
          updateEmployee({
            ...(this.employee as Employee),
            id: this.employeeId,
          })
        )
      : store.dispatch(addEmployee(this.employee as Employee));
    Router.go("/employees");
  }

  private getFieldError(field: string) {
    return this.errors.find((error) => error.field === field)?.message;
  }

  private renderFormField(
    field: keyof Employee,
    type: string = "text",
    placeholder?: string
  ) {
    return html`
      <div class="form-group">
        <label for="${field}">${msg(field)}</label>
        <input
          type="${type}"
          id="${field}"
          placeholder="${msg(placeholder ?? field)}"
          .value="${this.employee[field] ?? ""}"
          @input="${(e: Event) => this.handleInput(e, field)}"
        />
        ${this.getFieldError(field)
          ? html`<div class="error">${this.getFieldError(field)}</div>`
          : ""}
      </div>
    `;
  }

  private renderSelectField(field: keyof Employee, options: string[]) {
    return html`
      <div class="form-group">
        <label for="${field}">${msg(field)}</label>
        <select
          id="${field}"
          .value="${this.employee[field] ?? ""}"
          @change="${(e: Event) => this.handleInput(e, field)}"
        >
          <option value="" disabled selected>${msg("Select " + field)}</option>
          ${options.map(
            (option) => html`<option value="${option}">${option}</option> `
          )}
        </select>
        ${this.getFieldError(field)
          ? html`<div class="error">${this.getFieldError(field)}</div>`
          : ""}
      </div>
    `;
  }

  static override readonly styles = css`
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
  `;

  override render() {
    return html`
      <form @submit=${this.handleSubmit}>
        ${this.renderFormField("firstName")} ${this.renderFormField("lastName")}
        ${this.renderFormField("dateOfEmployment", "date")}
        ${this.renderFormField("dateOfBirth", "date")}
        ${this.renderFormField("phoneNumber", "tel")}
        ${this.renderFormField("email", "email")}
        ${this.renderSelectField("department", [...Departments])}
        ${this.renderSelectField("position", [...Positions])}
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
