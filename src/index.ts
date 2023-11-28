import "./screens/profile"
import "./screens/dashboard"
import "./components/export"
import "./screens/Landing"
import "./screens/Login"
import "./screens/SingUp"
import "./screens/Details"
import styles from "./global.css"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `<style>${styles}</style>`
        }
        switch(appState.screen){
            case Screens.PROFILE:
                const profile = this.ownerDocument.createElement('app-profile');
                this.shadowRoot?.appendChild(profile);
            break;
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
            break;
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement('app-login');
                this.shadowRoot?.appendChild(login);
            break;
            case Screens.SINGUP:
                const singup = this.ownerDocument.createElement('app-singup');
                this.shadowRoot?.appendChild(singup);
            break;
            case Screens.LANDING:
                const landing = this.ownerDocument.createElement('app-landing');
                this.shadowRoot?.appendChild(landing);
            break;
            case Screens.POSTDETAILS:
                const postdetails = this.ownerDocument.createElement('app-details');
                this.shadowRoot?.appendChild(postdetails);
            break;
        }
    }
}

customElements.define('app-container', AppContainer)