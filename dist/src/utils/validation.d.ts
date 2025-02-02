export interface ValidationError {
    field: string;
    message: string;
}
export declare class Validator {
    private errors;
    required(value: any, field: string): Validator;
    email(value: string, field: string): Validator;
    phone(value: string, field: string): Validator;
    date(value: string, field: string): Validator;
    hasErrors(): boolean;
    getErrors(): ValidationError[];
    clearErrors(): void;
}
//# sourceMappingURL=validation.d.ts.map