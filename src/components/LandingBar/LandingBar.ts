import LandingBarStyle from "./LandingBar.css"

class LandingBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${LandingBarStyle}</style>
            <section>
            <div class="Landing-bar-logo">
            <img class="logo-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png" alt="">
            <img class="logo-mobile" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153024263939440760/OFNYLogoletras.png" alt="">
            <h3>OFNY</h3>
            </div>
            
            <div class="landing-bar-buttons">
                 <button id="login-button">Log In</button>
                <button id="signup-button">Sign Up</button>
            </div>
            </section>
            `
        }
    }
}

customElements.define("landing-bar", LandingBar);
export default LandingBar;