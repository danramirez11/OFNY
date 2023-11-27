import EditProfileStyle from "./EditProfile.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from "../../store/actions";

export enum EditAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "birth" = "birth"
}

const formsProfile = {
    username: " ",
    profilepicture: " ",
    bio: " ",
    pronouns: " ",
    website: " ",
    birth: " ",
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
        addObserver(this);
    }
    
    connectedCallback(){
        this.render();

        const modal = this.shadowRoot?.querySelector('.modal')
        if (appState.editprofile){
            modal?.classList.add('appear')
        } else {
            modal?.classList.remove('appear')
        }

        const btnClose = this.shadowRoot?.querySelector('.X')
        btnClose?.addEventListener(('click'), () => {
            dispatch(
                showmodal(false)
            )
        })
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditProfileStyle}</style>
            <section class="modal" id="modal">
                <section class="modal-content">
                <button class="X">X</button>
                <button class="button-save">SAVE</button>
                    <section class="basic">
                        <div class="basic-pfp">
                        <img class="profilepicture" src="${this.profilepicture}">
                        <p>Delete profile picture</p>
                        </div>
                        <div class="basic-username">
                        <input type="text" class="input-username" placeholder="${this.username}"></input>
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