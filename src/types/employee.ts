export type Employee = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: 'Tech' | 'Analytics';
  position: 'Junior' | 'Medior' | 'Senior';
  dateOfEmployment: string;
  dateOfBirth: string;
}; 