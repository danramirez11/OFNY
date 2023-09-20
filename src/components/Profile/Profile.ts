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
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./Profile.css">
            <section class="allprofile">
                <img class="profilepicture" src="${this.profilepicture}">
                <section>
                <div class="profile-user">
                    <h3>${this.username}</h3>
                    <button>EDIT PROFILE</button>
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