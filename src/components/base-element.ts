import { LitElement } from 'lit';

export class BaseElement extends LitElement {
  private readonly handleLanguageChange = () => this.requestUpdate();

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('language-changed', this.handleLanguageChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('language-changed', this.handleLanguageChange);
  }
} 