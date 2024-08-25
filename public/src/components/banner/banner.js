class Banner extends HTMLElement {
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
			<link rel="stylesheet" href="./src/components/banner/banner.css">
			<section class="img-avatar">
                <img src="./src/assets/ubisoft aviso_Mesa de trabajo 1.png" alt="">
                <div>
                    <h1>PROTECT PANDORA. BECOME NA'VI.</h1>
                    <p>Reconnect with your lost heritage discover what it trully means to be Na'vi, and join other clans to <b></b> protect Pandora.</p>
                </div>
            </section>
    `;
	}
}

customElements.define('banner-component', Banner);
export default Banner;