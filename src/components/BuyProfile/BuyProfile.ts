import BuyProfileStyle from "./BuyProfile.css"

export enum BuyPAttribute {
    "clothes" = "clothes"
}

class BuyProfile extends HTMLElement{
    
    clothes?: string;
    
    static get observedAttributes(){
        const attrs: Record<BuyPAttribute,null> = {
            clothes: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:BuyPAttribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BuyProfileStyle}</style>
            <section>
            <img src="${this.clothes}">
            <button>SHOP</button>
            </section>
            `
        }
    }
}

customElements.define("buy-profile", BuyProfile);
export default BuyProfile;