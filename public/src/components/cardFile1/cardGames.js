class CardGames extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'subtitle', 'icon1', 'icon2', 'icon3', 'icon4'];
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
			<link rel="stylesheet" href="./src/components/cardFile1/cardGames.css">
			<div class="card">
				<img src=${this.img}>
				<h3 class= "subtitle">${this.subtitle}</h3>
			</div>
					<div class="icon-games">
						<svg>${this.icon1}</svg>
						<svg>${this.icon2}</svg>
						<svg>${this.icon3}</svg>
						<svg>${this.icon4}</svg>
					</div>
			
    `;
	}
}

customElements.define('product-card', CardGames);
export default CardGames;