export enum PostAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
    "post" = "post"
}

class MainPost extends HTMLElement{
    
    username?: string;
    profilepicture?: string;
    post?: string;
    
    static get observedAttributes(){
        const attrs: Record<PostAttribute,null> = {
            username: null,
            profilepicture: null,
            post: null,
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
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="MainPost.css">
            <section>
            <img class="post-img" src="${this.post}">
            <img class="post-heart-mobile" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png">
            <div class="post-info">
                <img class="profilepicture" src="${this.profilepicture}">
                <p>${this.username}</p>
                <img class="post-heart-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png">
                <img class="post-buy" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153041634519429120/OFNYbuy.png">
            </div>
            </section>
            `
        }
    }
}

customElements.define("main-post", MainPost);
export default MainPost;