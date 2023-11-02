import "./screens/profile"
import "./screens/dashboard"
import "./components/export"
import "./screens/Landing"
import "./screens/Login"
import "./screens/SingUp"
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
                const login = this.ownerDocument.createElement('app-profile');
                this.shadowRoot?.appendChild(login);
            break;
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
            break;
        }
    }
}

customElements.define('app-container', AppContainer)