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
			<link rel="stylesheet" href="./src/components/banner2/banner2.css">
            <nav-component></nav-component>
            <banner-component></banner-component>
			
			<section class= "sect-banner2">
				<img src="./src/assets/ubisoft aviso_Mesa de trabajo 1.png" alt="">
				<banner2-component></banner2-component>
				<btn-component id="btn" color="#FF0D78"label="JOIN NOW"></btn-componentcolor>
             </section>
    `;
	}
}

customElements.define('app-container', AppContainer);