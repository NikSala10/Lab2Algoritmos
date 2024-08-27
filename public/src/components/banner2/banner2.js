class Banner2 extends HTMLElement {
    static get observedAttributes() {
        return [];
}

constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

connectedCallback() {
    this.render();
    
}

attributeChangedCallback(name, oldValue, newValue) {}

	render() {
		this.shadowRoot.innerHTML = `
					<link rel="stylesheet" href="./src/components/banner2/banner2.css">
					<h1 id="title">Star Wars Outlaws</h1>
					<p id="subTitle">Get 3 days Early Acces with Ubisoft+ Premium or Gold Edition.</p>
			
           
			
    `;
	}
}

customElements.define('banner2-component', Banner2);
export default Banner2;