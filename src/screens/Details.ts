import * as components from "../components/export"
import MainBar, { Attribute } from "../components/MainBar/MainBar";
import BoxDetails from "../components//BoxDetails/BoxDetails";
import DetailsStyle from "./Details.css";

class DetailsPostContainer extends HTMLElement {
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
            <style>${DetailsStyle}</style>
            `;
            const body = document.createElement("section")
            this.shadowRoot.appendChild(body);
            body.classList.add("body");

            const mainbar = document.createElement("main-bar");
            this.shadowRoot.appendChild(mainbar);

            const BoxDetails = document.createElement("box-details");
            body.appendChild(BoxDetails);
        }
    }
}

customElements.define("app-details", DetailsPostContainer);