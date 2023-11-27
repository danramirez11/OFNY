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
            <img id="imagepost" src="<>${this.imagepost}">
            
            <div class="postdetails">
                <div class="userdetails">
                <img src="${this.profilepicture}" alt="User Profile Picture">
                <h1>${this.username}</h1>
                </div>

                <div class= "posterdetails">
                <p id="caption" >${this.caption}</p>
                <p id="tags" >${this.tags}</p>
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

customElements.define("box-details", BoxDetails);
export default BoxDetails;