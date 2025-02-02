import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localized, msg } from "@lit/localize";
@localized()
@customElement("delete-modal")
export class DeleteModal extends LitElement {
  @property() onConfirm = () => {};
  @property() onCancel = () => {};

  static override readonly styles = css`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 400px;
      width: 90%;
    }

    .modal-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-color);
    }

    .modal-content {
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      border: none;
    }

    .confirm-btn {
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
      <div class="modal-backdrop" @click=${() => this.onCancel()}>
        <div class="modal" @click=${(e: Event) => e.stopPropagation()}>
          <h2 class="modal-title">${msg("Are you sure?")}</h2>
          <div class="modal-content">
            ${msg("This action cannot be undone.")}
          </div>
          <div class="modal-actions">
            <button class="cancel-btn" @click=${() => this.onCancel()}>
              ${msg("Cancel")}
            </button>
            <button class="confirm-btn" @click=${() => this.onConfirm()}>
              ${msg("Proceed")}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
