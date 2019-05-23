import { LitElement, html , css} from 'lit-element';
import './my-items'

class MyList extends LitElement {

    static get properties() {
        return {
            lista: { type: Array }
        };
    }

    constructor() {
        super();
        this.lista = [];
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        :host([hidden]) {
            display: none;
        }
        ul{
            list-style:none;
            padding:0;
        }
        `;
      }

    render() {
        return html`
        <p>soy mylist</p>
        <ul>
            ${this.lista.map(item => html`<my-items .item="${item}" ?encendido="${item.encendido}" ></my-items>`)}
        </ul>
        `;
    }


}
customElements.define('my-list', MyList);