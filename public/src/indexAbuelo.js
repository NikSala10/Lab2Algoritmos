import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); 
		
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
            <nav-component></nav-component>
            <banner-component></banner-component>
			<banner2-component></banner-component>
            
    `;
	}
}

customElements.define('app-container', AppContainer);