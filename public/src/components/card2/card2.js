class CardDescriptGame extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'title', 'date'];
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
			<link rel="stylesheet" href="./src/components/card2/card2.css">
			<div>
                <img src=${this.img}>
                <div>
                    <p>${this.date}</p>
                    <h3>${this.title}</h3>
                 </div>
            </div>
			
    `;
	}
}

customElements.define('descript-gamecard', CardDescriptGame );
export default CardDescriptGame ;