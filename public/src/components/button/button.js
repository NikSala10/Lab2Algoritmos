class Button extends HTMLElement {
	static get observedAttributes() {
		return ['label', 'color'];
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
            <link rel="stylesheet" href="./src/components/button/button.css">
			 <button style="color: ${color};">${label}</button>
    `;
	}
}

customElements.define('button-component', Button);
export default Button;