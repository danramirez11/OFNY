export enum BarMobileAttribute {
    "profilepicture" = "profilepicture"
}

class BarMobile extends HTMLElement{

    profilepicture?: string;

    static get observedAttributes(){
        const attrs: Record<BarMobileAttribute,null> = {
            profilepicture: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:BarMobileAttribute,oldValue: string | undefined,newValue: string | undefined){
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
            <link rel="stylesheet" href="BarMobile.css">
            <section>
                <img class="logo-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png" alt="">
                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153003565049204847/OFNYSearch.png" alt="">
                <img class="profilepicture" src="${this.profilepicture}">
            </section>
            `
        }
    }
}

customElements.define("bar-mobile", BarMobile);
export default BarMobile;