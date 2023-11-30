import ProfileStyle from "./Profile.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from '../../store/actions';
import firebase from "../../utils/firebase";



export enum ProfileAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "posts" = "posts",
    "following" = "following",
    "followers" = "followers",
    "desc" = "desc"
}

class Profile extends HTMLElement{
    
    username?: string;
    profilepicture?: string;
    posts?: number;
    following?: number;
    followers?: number;
    desc?: string;
    
    static get observedAttributes(){
        const attrs: Record<ProfileAttribute,null> = {
            username: null,
            profilepicture: null,
            posts: null,
            following: null,
            followers: null,
            desc: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:ProfileAttribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case ProfileAttribute.posts:
                this.posts = newValue ? Number(newValue) : undefined;
            break;
            case ProfileAttribute.followers:
                this.followers = newValue ? Number(newValue) : undefined;
            break;
            case ProfileAttribute.following:
                this.following = newValue ? Number(newValue) : undefined;
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
        this.username = appState.user.username;

        const pfp = await firebase.getFile(appState.user.pfp);
        this.profilepicture = pfp;

        this.desc = appState.user.bio

        this.render();

        const btnEditProfile = this.shadowRoot?.querySelector('.btnEditProfile');
            btnEditProfile?.addEventListener(('click'), this.OpenEditProfile)

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
                <p class="user-stats">${this.posts || 0} Ofnis    ${this.followers || 0} followers ${this.following || 0}    following</p>
                <p>${this.desc || "No description available :("}</p>
                </section>
            </section>
            `
        }
    }
}

customElements.define("my-profile", Profile);
export default Profile;