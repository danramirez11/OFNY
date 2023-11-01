import * as components from "../components/export"
import BoxSingUp from "../components/BoxSingup/BoxSingUp";
import SingUptyle from "./SingUp.css";

class SingUpContainer extends HTMLElement {
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
            <style>${SingUptyle}</style>
            `;
            const body = document.createElement("section")
            this.shadowRoot.appendChild(body);
            body.classList.add("body")

            const BoxSingUp = document.createElement("box-singup");
            body.appendChild(BoxSingUp);
        }
    }
}

customElements.define("app-singup", SingUpContainer);