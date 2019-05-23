import { LitElement, html, css } from 'lit-element';
import './my-list'

class MyApp extends LitElement {

    static get properties() {
        return {
            lista: { type: Array }
        };
    }

    constructor() {
        super();
        this.lista = [{
                nombre: 'Andres',
                activado: true,
                id: 0
            },
            {
                nombre: 'Carlos',
                activado: false,
                id: 1
            },
            {
                nombre: 'Sandra',
                activado: false,
                id: 2
            }
        ]
    }

    static get styles() {
        return css `
        :host {
            display: block;
        }
        :host([hidden]) {
            display: none;
        }
        `;
    }

    render() {
        return html `
            <p>hola desde my app</p>
            <my-list .lista="${this.lista}" @click-changed="${this._changeClick}"></my-list>  
        `;
    }

    _changeClick(event) {
        this.lista = this.lista.map(item => {
            if (item.id == event.detail.elItem.id) {
                return {
                    ...item,
                    activado: event.detail.isCheked
                }
            } else {
                return item;
            }
        });
        console.log(this.lista)

    }

}
customElements.define('my-app', MyApp);