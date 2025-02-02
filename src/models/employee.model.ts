export const Departments = ['Analytics', 'Tech'] as const;
export type Department = typeof Departments[number];

export const Positions = ['Junior', 'Medior', 'Senior'] as const;
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