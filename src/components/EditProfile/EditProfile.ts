export enum EditAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "birth" = "birth"
}

class EditProfile extends HTMLElement{
    
    username?: string;
    profilepicture?: string;
    birth?: string;

    static get observedAttributes(){
        const attrs: Record<EditAttribute,null> = {
            username: null,
            profilepicture: null,
            birth: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:EditAttribute,oldValue: string | undefined,newValue: string | undefined){
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
            <link rel="stylesheet" href="./EditProfile.css">
            <section class="modal hide" id="modal">
                <section class="modal-content">
                <button class="X">X</button>
                <button class="button-save">SAVE</button>
                    <section class="basic">
                        <div class="basic-pfp">
                        <img class="profilepicture" src="${this.profilepicture}">
                        <p>Delete profile picture</p>
                        </div>
                        <div class="basic-username">
                        <h3>${this.username}</h3>
                        <button>New Username</button>
                        </div>
                    </section>
                    <section class="desc">
                        <div class="desc-bio">
                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">
                        <input type="text" placeholder="BIO">
                        </div>
                        <div class="desc-pronouns">
                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">
                        <input type="text" placeholder="PRONOUNS">
                        </div>
                        <div class="desc-web">
                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">
                        <input type="text" placeholder="WEBSITE">
                        </div>
                    </section>
                    <div class="birth">
                    <p>BIRTH DATE</p>
                    <h4>${this.birth}</h4>
                    <button>Edit</button>
                    </div>
                </section>
            </section>
            `
        }
    }
}

customElements.define("edit-profile", EditProfile);
export default EditProfile;