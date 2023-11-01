import "./screens/profile"
import "./screens/dashboard"
import "./components/export"
import "./screens/Landing"
import "./screens/Login"
import "./screens/SingUp"
import styles from "./global.css"

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
            this.shadowRoot.innerHTML = `<style>${styles}</style>`
        }
        const dashboard = this.ownerDocument.createElement('app-singup');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)