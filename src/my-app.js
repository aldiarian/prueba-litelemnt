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
        this.lista = [
            {
                nombre: 'Andres',
                click: false,
                id:0
            },
            {
                nombre: 'Carlos',
                click: false,
                id:1
            },
            {
                nombre: 'Sandra',
                click: false,
                id:2
            }
        ]
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        :host([hidden]) {
            display: none;
        }
        `;
      }

    render() {
        return html`
            <p>hola desde my app</p>
            <my-list .lista="${this.lista}" @click-changed="${this._changeClick}"></my-list>  
        `;
    }
    
    _changeClick(event){
        console.log( '_changeClick', event.detail.elItem )
        console.log( this.lista );
        this.lista = this.lista.map( item => {
            console.log('yeee');
            
            // if( item.id == event.detail.elItem ){
            //     console.log('encontrado');
                
            // } else {
            //     console.log('nada');
            // }
        })
        
    }

}
customElements.define('my-app', MyApp);