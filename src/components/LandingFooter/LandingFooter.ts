import FooterStyle from "./LandingFooter.css"

class Footer extends HTMLElement {
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
            <style>${FooterStyle}</style>
            <div class= "footer-bar">
            <button id="Terms">Terms of Service</button>
            <button id="Privacy">Privacy policies</button>
            <button id="Help">Help</button>
            <button id="App">App</button>
            </div>
            `
        }
    }
}

customElements.define("footer-landing", Footer);
export default Footer;