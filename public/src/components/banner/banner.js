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
			<link rel="stylesheet" href="./src/components/button/button.css">
			<section class="img-avatar">
                <img src="./src/assets/ubisoft aviso_Mesa de trabajo 1.png" alt="">
                <div id= "text-content">
                    <h1>PROTECT PANDORA. BECOME NA'VI.</h1>
                    <p>Reconnect with your lost heritage discover what it trully means to be Na'vi, and join other clans to <b></b> protect Pandora.</p>
                </div>
				<div id= "button-content">
                    <btn-component id="btn-banner" color="#016AA4" label="WATCH TRAILER"></btn-component>
                    <btn-component id="btn-banner" color="#016AA4" label="BUY NOW"></btn-component>
                </div>
				<div id= "public-content">
                    <p>XDEFIANT</p>
					<p>BATTLECORE ARENA</p>
					<p>THE CREW MOTORFEST</p>
					<p>RIDERS REPUBLIC</p>
                </div>
            </section>
    `;
	}
}

customElements.define('banner-component', Banner);
export default Banner;