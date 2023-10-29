import LandingShareStyle from "./LandingShare.css"

class LandingShare extends HTMLElement {
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