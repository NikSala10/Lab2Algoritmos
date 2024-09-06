class CardImg extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'title'];
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
			<link rel="stylesheet" href="./src/components/card3/card3.css">
			<div>
                <img src=${this.img}>
                <h3>${this.title}</h3>
                
            </div>
			
    `;
	}
}

customElements.define('card-img', CardImg );
export default CardImg ;