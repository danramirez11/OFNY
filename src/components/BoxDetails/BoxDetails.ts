import BoxDetailsStyle from "./BoxDetails.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from '../../types/store';
import { Screens } from '../../types/navigation';
import { navigate } from '../../store/actions';
import firebase from "../../utils/firebase";

export enum EditAttribute {
    "imagepost" = "imagepost",
    "username" = "username",
    "profilepicture" = "profilepicture",
    "caption" = "caption",
    "tags" = "tags"
}

class BoxDetails extends HTMLElement {
    imagepost?: string;
    username?: string;
    profilepicture?: string;
    caption?: string;
    tags?: string;


    static get observedAttributes(){
        const attrs: Record<EditAttribute,null> = {
            imagepost: null,
            username: null,
            profilepicture: null,
            caption: null,
            tags: null,
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

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();

        const btnProfile = this.shadowRoot?.querySelector('.profilepicture');
        btnProfile?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.PROFILE
				)
			);
        })
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BoxDetailsStyle}</style>
            <section>
            <img id="image post" src="<>${this.imagepost}">
            
            <div class=post details>
            <h1>${this.username}</h1>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666493194616852/Group_326.png?ex=6552987c&is=6540237c&hm=30a4aadfdb9f701d4a16a30690fea37279108f9b9a370b504d814d708a614fd3&" alt="User Icon">
                    <input placeholder="Username" type="text" id="username" name="username">
                </div>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666492703875122/Group_327.png?ex=6552987c&is=6540237c&hm=94a595cb017903b639e2a5e645e1f46817c2b8ea712cb87c6eec469073e0e245&" alt="Password Icon">
                    <input placeholder="Password" type="password" id="password" name="password">
                </div>
                <div class="options">
                    <img class="post-heart-desktop check" src="https://cdn.discordapp.com/attachments/1108887572618412231/1169285218528673862/Group_3111.png?ex=6554d8b8&is=654263b8&hm=59a1ef10175f86c38a8f7dda15798a76cf0bdf2f1ecc3cf9e6585f5f133c4f72&">
                    <button id="Remember">Remember</button>
                    <button id="Forgot-password">Forgot-password?</button>
                </div>
                <div class"button-login">
                    <button id="login-button">Log In</button>  
                </div>
                <div class="options">
                    <button id="no-acount">Don’t have an account? Sing Up</button>
                </div>
            </div>
            </section>
            `
        }
    }
    isliked: boolean = false

    checkClick = () => {
        this.isliked = !this.isliked;
        const check = this.shadowRoot?.querySelectorAll(".check") as NodeListOf<HTMLImageElement>;

        check.forEach((check) => {
        if (this.isliked) {
            check.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1169285218243448973/Group_311.png?ex=6554d8b8&is=654263b8&hm=eb4eb00eca23aee00264abf3df56800956f46e24ea2a462ef32d57c8cf19336b&"
            ;
        } else {
            check.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1169285218528673862/Group_3111.png?ex=6554d8b8&is=654263b8&hm=59a1ef10175f86c38a8f7dda15798a76cf0bdf2f1ecc3cf9e6585f5f133c4f72&"
            ;
        }});
    };
}

customElements.define("box-login", BoxLogin);
export default BoxLogin;