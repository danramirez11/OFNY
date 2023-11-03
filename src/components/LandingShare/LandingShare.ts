import LandingShareStyle from "./LandingShare.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from "../../types/store";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";

class LandingShare extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        const btnLogin = this.shadowRoot?.querySelector('#share-button');
        btnLogin?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.LOGIN
				)
			);
        })
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${LandingShareStyle}</style>
            <section>
            <h1>OFNY</h1>
            <h2>DRESS UR WORLD</h2>
            <button id="share-button">Share my style</button>
            </section>
            `
        }
    }
}

customElements.define("landing-share", LandingShare);
export default LandingShare;