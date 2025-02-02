export declare const Departments: readonly ["Analytics", "Tech"];
export type Department = typeof Departments[number];
export declare const Positions: readonly ["Junior", "Medior", "Senior"];
export type Position = typeof Positions[number];
export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    dateOfEmployment: string;
    dateOfBirth: string;
    phoneNumber: string;
    email: string;
    department: Department;
    position: Position;
}
//# sourceMappingURL=employee.model.d.ts.map