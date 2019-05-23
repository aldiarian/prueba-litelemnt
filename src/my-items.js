import { LitElement, html, css } from 'lit-element';

export class MyItems extends LitElement {

    static get properties() {
        return {
            item : { type: Array },
            encendido : { type: Boolean }
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
        :host {
            display: block;
            cursor: pointer;
        }
        :host([hidden]) {
            display: none;
        }
        `;
      }

    render() {
        return html`
       <li @click="${this._itemClick}">
        ${this.encendido ? this.checkedIcon : this.unCheckedIcon} ${this.item.nombre}
       </li>
        `;
    }

  get checkedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
  }
  get unCheckedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }

  _itemClick(event){
      this.encendido = !this.encendido;
      this.dispatchEvent(new CustomEvent('click-changed', {
        bubbles: true,
        composed: true,
        detail: {
            isCheked: this.encendido,
            elItem : this.item
        }
      }));
  }

}
customElements.define('my-items', MyItems);