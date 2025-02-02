import { Employee } from '../models/employee.model';
import { EmployeeAction } from './actions';
export interface AppState {
    employees: Employee[];
    viewMode: 'table' | 'list';
    language: 'en' | 'tr';
}
export declare const rootReducer: (state: any, action: EmployeeAction) => AppState;
//# sourceMappingURL=reducers.d.ts.map