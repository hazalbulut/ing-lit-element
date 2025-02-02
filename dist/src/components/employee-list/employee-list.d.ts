import { LitElement } from "lit";
export declare class EmployeeList extends LitElement {
    private employees;
    private filteredEmployees;
    private currentPage;
    private searchQuery;
    private viewMode;
    private showDeleteModal;
    private selectedEmployeeId;
    private readonly PAGE_SIZE;
    private unsubscribe?;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private stateChanged;
    private filterEmployees;
    private handleSearch;
    private handleViewModeChange;
    private handleDelete;
    private confirmDelete;
    private getPaginatedEmployees;
    private get totalPages();
    render(): import("lit").TemplateResult<1>;
    private renderTableView;
    private renderTableRow;
    private renderListView;
    private renderPagination;
    private renderDeleteModal;
}
//# sourceMappingURL=employee-list.d.ts.map