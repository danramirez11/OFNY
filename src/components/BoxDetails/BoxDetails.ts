import BoxDetailsStyle from "./BoxDetails.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from '../../types/store';
import { Screens } from '../../types/navigation';
import { changeuserscreen, navigate } from '../../store/actions';
import firebase from "../../utils/firebase";

export enum EditAttribute {
    "imagepost" = "imagepost",
    "username" = "username",
    "profilepicture" = "profilepicture",
    "caption" = "caption",
    "tags" = "tags",
    "like" = "like"
}



class BoxDetails extends HTMLElement {
    imagepost?: string;
    username?: string;
    profilepicture?: string;
    caption?: string;
    tags?: string;
    like?: string;

    tagslist = []


    static get observedAttributes(){
        const attrs: Record<EditAttribute,null> = {
            imagepost: null,
            username: null,
            profilepicture: null,
            caption: null,
            tags: null,
            like: null,
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
        this.likeClick = this.likeClick.bind(this);
        this.like = "https://cdn.discordapp.com/attachments/1108887572618412231/1154166566510940230/OFNYHeartline.png";
    }

    connectedCallback(){

        

        this.render();

        const heart = this.shadowRoot?.querySelectorAll(".post-heart-desktop-heart");
            heart?.forEach((heart) => {
                heart.addEventListener("click", this.likeClick);
            });

        const btnProfile = this.shadowRoot?.querySelector('.profilepicture');
        btnProfile?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.PROFILE
				)
			);
        })
    }
    
    async render(){
        if(this.shadowRoot){

            const post = await firebase.getDetailsInfo(appState.postid)
            if (post){
                this.caption = post.desc;

                const img = await firebase.getFile(post.img);
                this.imagepost = img;

                const tags = JSON.parse(post.tags);
                this.tagslist = tags;

                const postperson = await firebase.getProfile(post.user);
                this.username = postperson?.username
                const pfpurl = await firebase.getFile(postperson?.pfp);
                this.profilepicture = pfpurl;

                
                
            }
            

            this.shadowRoot.innerHTML = `
            <style>${BoxDetailsStyle}</style>
            <section>
            <img id="imagepost" src="${this.imagepost}">
            
            <div class="postdetails">
                <div class="userdetails">
                <img id="profilepicture" src="${this.profilepicture}" alt="User Profile Picture">
                <h1>${this.username}</h1>
                </div>

                <div class= "captionandtags">
                <p id="caption" >${this.caption}</p>
                <section id="tags" > </section>
                </div>

                
                <img class="post-heart-desktop-heart" src="${this.like}">
                
            </div>
            </section>
            `

            const tagsContainer = this.shadowRoot.querySelector('#tags');
                this.tagslist.forEach((tagText: any) => {
                    const tag = document.createElement('button');
                    tag.classList.add('.button-tag')
                    tag.textContent = tagText;
                    tagsContainer?.appendChild(tag);
                })

                const postinfo = await firebase.getDetailsInfo(appState.postid)
                const userdetails = this.shadowRoot.querySelector('.userdetails');
                userdetails?.addEventListener(('click'), () => {
                    console.log('clicked');
                    dispatch(changeuserscreen(postinfo?.user));
                    dispatch(navigate(Screens.PROFILE));
                    
                })
            
        }
    }
    isliked: boolean = false

    likeClick = () => {
        
        const heart = this.shadowRoot?.querySelectorAll(".post-heart-desktop-heart") as NodeListOf<HTMLImageElement>;

        heart.forEach((heart) => {
        if (this.isliked) {
            heart.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png";
        } else {
            heart.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1154166566510940230/OFNYHeartline.png";
        }});
    };
}

customElements.define("box-details", BoxDetails);
export default BoxDetails;