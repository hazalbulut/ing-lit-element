import { BaseElement } from "../base-element";
export declare class NavMenu extends BaseElement {
    currentLanguage: "en" | "tr";
    unsubscribe?: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onLanguageSelect;
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=nav-menu.d.ts.map