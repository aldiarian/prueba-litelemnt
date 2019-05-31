import { LitElement, html, css } from 'lit-element';
import './my-items';

class MyList extends LitElement {

    static get properties() {
        return {
            lista: { type: Array }
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return css `
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
        return html `
            <ul>
                ${ this.lista.map(item => html`<my-items .alumno=${item} ?encendido=${item.activado}></my-items>`)}
            </ul>
        `;
    }

    connectedCallback(){
        super.connectedCallback();
        document.addEventListener( 'click' , this.doClick)
        console.log( 'contectado ')
    }
    disconnectedCallback(){
        console.log( 'descontectado ')
        document.removeEventListener( 'click' , this.doClick)
        super.disconnectedCallback();
    }

    doClick(){
        console.log('cliiiiickk clicliclik')
    }


}
customElements.define('my-list', MyList);