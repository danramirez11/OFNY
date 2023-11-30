import EditProfileStyle from "./EditProfile.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from "../../store/actions";
import firebase from "../../utils/firebase";

export enum EditAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "birth" = "birth"
}

const formsProfile = {
    username: appState.user.username || ' ',
    profilepicture: appState.user.pfp || ' ',
    bio: appState.user.bio || ' ',
    pronouns: appState.user.pron || ' ',
    website: appState.user.web || ' ',
    birth: appState.user.birth || ' ',
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
    
    async connectedCallback(){
        this.username = appState.user.username;

        const pfp = await firebase.getFile(appState.user.pfp);
        this.profilepicture = pfp;

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

        const inputUsername = this.shadowRoot?.querySelector('.input-username');
        inputUsername?.addEventListener(("change"), (e: any) => {
            formsProfile.username = e.target.value
        });

        const imgInput = this.ownerDocument.createElement("input")
        imgInput.type = "file";
        imgInput.classList.add('imgInput');
        imgInput?.addEventListener("change", async () => {
            const file = imgInput.files?.[0];
            if (file) { 
                const fullPath = await firebase.uploadFile(file);
                formsProfile.profilepicture = fullPath;
                console.log("full: " + fullPath);
            }
          });
          const pfpInfoDiv = this.shadowRoot?.querySelector('.basic-pfp');
          pfpInfoDiv?.appendChild(imgInput);

        const inputBio = this.shadowRoot?.querySelector('.desc-bio');
        inputBio?.addEventListener(("change"), (e: any) => {
            formsProfile.bio = e.target.value
        });

        const inputPron = this.shadowRoot?.querySelector('.desc-pronouns');
        inputPron?.addEventListener(("change"), (e: any) => {
            formsProfile.pronouns = e.target.value
        });

        const inputWeb = this.shadowRoot?.querySelector('.desc-web');
        inputWeb?.addEventListener(("change"), (e: any) => {
            formsProfile.website = e.target.value
        });

        const saveButton = this.shadowRoot?.querySelector('.button-save');
        saveButton?.addEventListener("click", this.saveProfile)
        

    }

    saveProfile(){
        firebase.editProfile(formsProfile, "z9R9t4beoGh2kwrwHirxaCDMO0r2");
        this.OpenEditProfile();
    }

    OpenEditProfile(){

        if (appState.editprofile){
            dispatch(
                showmodal(false)
            )
        } else {
            dispatch(
                showmodal(true)
            )
        }
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