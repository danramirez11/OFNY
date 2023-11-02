import MainPostStyle from "./MainPost.css"

export enum PostAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "post" = "post",
    "like" = "like"
}

class MainPost extends HTMLElement{

    
    
    username?: string;
    profilepicture?: string;
    post?: string;
    like?: string;
    
    static get observedAttributes(){
        const attrs: Record<PostAttribute,null> = {
            username: null,
            profilepicture: null,
            post: null,
            like: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:PostAttribute,oldValue: string | undefined,newValue: string | undefined){
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
        
        const heart = this.shadowRoot?.querySelectorAll(".heart");
            heart?.forEach((heart) => {
                heart.addEventListener("click", this.likeClick);
            });
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${MainPostStyle}</style>
            <section>
            <img class="post-img" src="${this.post}">
            <img class="post-heart-mobile heart" src="${this.like}">
            <div class="post-info">
                <img class="profilepicture" src="${this.profilepicture}">
                <p>${this.username}</p>
                <img class="post-heart-desktop heart" src="${this.like}">
                <img class="post-buy" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153041634519429120/OFNYbuy.png">
            </div>
            </section>
            `
        }
    }

    isliked: boolean = false

    likeClick = () => {
        this.isliked = !this.isliked;
        const heart = this.shadowRoot?.querySelectorAll(".heart") as NodeListOf<HTMLImageElement>;

        heart.forEach((heart) => {
        if (this.isliked) {
            heart.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png";
        } else {
            heart.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1154166566510940230/OFNYHeartline.png";
        }});
    };
}

customElements.define("main-post", MainPost);
export default MainPost;