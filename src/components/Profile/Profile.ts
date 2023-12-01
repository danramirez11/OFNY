import ProfileStyle from "./Profile.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from '../../store/actions';
import firebase from "../../utils/firebase";



export enum ProfileAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "posts" = "posts",
    "pronouns" = "pronouns",
    "web" = "web",
    "desc" = "desc"
}

class Profile extends HTMLElement{
    
    username?: string;
    profilepicture?: string;
    posts?: number;
    pronouns?: string;
    web?: string;
    desc?: string;
    
    static get observedAttributes(){
        const attrs: Record<ProfileAttribute,null> = {
            username: null,
            profilepicture: null,
            posts: null,
            pronouns: null,
            web: null,
            desc: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:ProfileAttribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case ProfileAttribute.posts:
                this.posts = newValue ? Number(newValue) : undefined;
            break;
            break;
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
        const user = await firebase.getProfile(appState.userscreen || appState.user.uid);

        this.username = user?.username;

        const pfp = await firebase.getFile(user?.pfp);
        this.profilepicture = pfp;

        this.desc = user?.bio;
        this.pronouns = user?.pron;
        this.web = user?.web;

        this.render();

        const btnEditProfile = this.shadowRoot?.querySelector('.btnEditProfile');
        btnEditProfile?.addEventListener(('click'), this.OpenEditProfile);
        if (appState.userscreen === `${appState.user.uid}`){
            btnEditProfile?.classList.remove('hide')
        }

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
            <style>${ProfileStyle}</style>
            <section class="allprofile">
                <img class="profilepicture" src="${this.profilepicture}">
                <section>
                <div class="profile-user">
                    <h3>${this.username}</h3>
                    <button class="btnEditProfile hide">EDIT PROFILE</button>
                </div>
                <p class="user-stats">${this.posts || 0} Ofnis     ${this.pronouns}</p>
                <p>${this.desc || "No description available :("}</p>
                <p>${this.web}</p>
                </section>
            </section>
            `
        }
    }
}

customElements.define("my-profile", Profile);
export default Profile;