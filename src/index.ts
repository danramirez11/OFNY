import * as components from "./components/export"
import MainBar, { Attribute } from "./components/MainBar/MainBar";

class MainContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});

            
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``

            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            mainbar.setAttribute(Attribute.username, "username1234");
            mainbar.setAttribute(Attribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            this.shadowRoot.appendChild(mainbar);
        }
    }
}

customElements.define("main-container", MainContainer);