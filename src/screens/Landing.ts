import * as components from "../components/export"
import LandingBar from "../components/LandingBar/LandingBar";
import LandingShare from "../components/LandingShare/LandingShare";
import Footer from "../components/LandingFooter/LandingFooter";
import LandigStyle from "./Landing.css";
import { appState, dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

class LandingContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        if (appState.user.uid !== " "){
            dispatch(navigate(Screens.DASHBOARD))
        }
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>${LandigStyle}</style>

            `;
            const body = document.createElement("section")
            this.shadowRoot.appendChild(body);
            body.classList.add("body")

            const LandingBar = document.createElement("landing-bar");
            body.appendChild(LandingBar);

            const LandingShare = document.createElement("landing-share");
            body.appendChild(LandingShare);

            const Footer = document.createElement("footer-landing");
            body.appendChild(Footer);
        }
    }
}

customElements.define("app-landing", LandingContainer);
