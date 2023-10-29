import * as components from "../components/export"
import LandingBar from "../components/LandingBar/LandingBar";
import LandingShare from "../components/LandingShare/LandingShare";
import Footer from "../components/LandingFooter/LandingFooter";
import LandigStyle from "./Landing.css";

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
            <style>${LandigStyle}</style>
            `;

            const LandingBar = document.createElement("landing-bar");
            this.shadowRoot.appendChild(LandingBar);

            const LandingShare = document.createElement("landing-share");
            this.shadowRoot.appendChild(LandingShare);

            const Footer = document.createElement("footer-landing");
            this.shadowRoot.appendChild(Footer);
        }
    }
}

customElements.define("app-landing", LandingContainer);

