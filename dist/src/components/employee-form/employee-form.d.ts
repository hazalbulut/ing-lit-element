import { BaseElement } from "../base-element";
export declare class EmployeeForm extends BaseElement {
    location?: string;
    private employeeId;
    private employee;
    private errors;
    private isEdit;
    private unsubscribe?;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private validateField;
    private handleInput;
    private handleSubmit;
    private getFieldError;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=employee-form.d.ts.map