import LandingBarStyle from "./LandingBar.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from "../../types/store";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";

class LandingBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        const btnLogin = this.shadowRoot?.querySelector('#login-button');
        btnLogin?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.LOGIN
				)
			);
        })
        const btnSingup = this.shadowRoot?.querySelector('#singup-button');
        btnSingup?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.SINGUP
				)
			);
        })
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${LandingBarStyle}</style>
            <section>
            <div class="Landing-bar-logo">
            <img class="logo-desktop" src="${appState.images.logo}" alt="">
            <img class="logo-mobile" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153024263939440760/OFNYLogoletras.png" alt="">
            <h3>OFNY</h3>
            </div>
            
            <div class="landing-bar-buttons">
                <button id="login-button">Log In</button>
                <button id="singup-button">Sign Up</button>
            </div>
            </section>
            `
        }
    }
}

customElements.define("landing-bar", LandingBar);
export default LandingBar;