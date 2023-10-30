import * as components from "../components/export"
import BoxLogin from "../components/BoxLogin/BoxLogin";
import LoginStyle from "./Landing.css";

class LandingContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>${LoginStyle}</style>

            `;
            const body = document.createElement("section")
            this.shadowRoot.appendChild(body);
            body.classList.add("body")

            const BoxLogin = document.createElement("landing-bar");
            body.appendChild(BoxLogin);
        }
    }
}

customElements.define("app-landing", LandingContainer);