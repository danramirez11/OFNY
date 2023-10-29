import "./screens/profile"
import "./screens/dashboard"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``
        }
        const dashboard = this.ownerDocument.createElement('landing-bar');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)