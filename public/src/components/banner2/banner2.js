class Banner2 extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/banner2/banner2.css">
			<section class= "sect-banner2">
				<img src="./src/assets/ubisoft aviso_Mesa de trabajo 1.png" alt="">
				<div id= "text-content">
					<h1>Star Wars Outlaws</h1>
					<p>Get 3 days Early Acces with Ubisoft+ Premium or Gold Edition.</p>
				</div>
            </section>
			
    `;
	}
}

customElements.define('banner2-component', Banner2);
export default Banner2;