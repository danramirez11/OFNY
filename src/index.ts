import * as components from "./components/export"
import MainBar, { Attribute } from "./components/MainBar/MainBar";
import MainPost, { PostAttribute } from "./components/MainPost/MainPost";
import BarMobile, { BarMobileAttribute } from "./components/BarMobile/BarMobile";
import Profile, { ProfileAttribute} from "./components/Profile/Profile";
import BuyProfile, { BuyPAttribute} from "./components/BuyProfile/BuyProfile";
import EditProfile, {EditAttribute} from "./components/EditProfile/EditProfile";
import { postData } from "./Data/DataMain";
import { clothesData } from "./Data/clothesData";
import mainStyle from "./main.css";
import profileconStyle from "./profilecon.css";
import displayPostStyle from "./displayPost.css";

class MainContainer extends HTMLElement {

    mainposts: MainPost[] = []

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
        postData.forEach((post) => {
            const newpost = this.ownerDocument.createElement("main-post") as MainPost;
            newpost.setAttribute(PostAttribute.post, post.post);
            newpost.setAttribute(PostAttribute.profilepicture, post.profilepicture);
            newpost.setAttribute(PostAttribute.username, post.username);
            this.mainposts.push(newpost);
        })
        
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${mainStyle}</style>
            <style>${displayPostStyle}</style>
            `

            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            mainbar.setAttribute(Attribute.username, "username1234");
            mainbar.setAttribute(Attribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            this.shadowRoot.appendChild(mainbar);

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer")
            this.mainposts.forEach((post) => {
                postscontainer.appendChild(post);
            })
            this.shadowRoot.appendChild(postscontainer);

            const barmobile = this.ownerDocument.createElement("bar-mobile") as BarMobile;
            barmobile.classList.add("barmobile")
            barmobile.setAttribute(BarMobileAttribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            this.shadowRoot.appendChild(barmobile);
        }
    }
}
customElements.define("main-container", MainContainer);

class ProfileContainer extends HTMLElement {

    posts: MainPost[] = [];
    clothes: BuyProfile[] = []

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
        clothesData.forEach((item) => {
            const clothe = this.ownerDocument.createElement("buy-profile") as BuyProfile;
            clothe.setAttribute(BuyPAttribute.clothes, item.clothes);
            this.clothes.push(clothe)
        })   
        
        for (let i = 0; i < 5; i++) {
            const newpost = this.ownerDocument.createElement("main-post") as MainPost;
            newpost.setAttribute(PostAttribute.post, postData[i].post);
            newpost.setAttribute(PostAttribute.profilepicture, postData[i].profilepicture);
            newpost.setAttribute(PostAttribute.username, postData[i].username);
            this.posts.push(newpost);
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${profileconStyle}</style>
            <style>${displayPostStyle}</style>
            `

            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            mainbar.setAttribute(Attribute.username, "username1234");
            mainbar.setAttribute(Attribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            this.shadowRoot.appendChild(mainbar);

            const profile = this.ownerDocument.createElement("my-profile") as Profile;
            profile.setAttribute(ProfileAttribute.username, "username1234");
            profile.setAttribute(ProfileAttribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            profile.setAttribute(ProfileAttribute.desc, "Hi! I'm Sunny <br> She/ser <br> I like cute clothes and anime");
            profile.setAttribute(ProfileAttribute.followers, "695");
            profile.setAttribute(ProfileAttribute.following, "89");
            profile.setAttribute(ProfileAttribute.posts, "5");
            this.shadowRoot.appendChild(profile);

            const clothescontainer = this.ownerDocument.createElement("section");
            clothescontainer.classList.add("clothescontainer");
            this.clothes.forEach((item) => {
                clothescontainer.appendChild(item)
            });
            this.shadowRoot.appendChild(clothescontainer);

            this.shadowRoot.innerHTML += ` 
            <section class="division">
            <div>
                <h3>OFNIS</h3>
                <h3>LIKES</h3>
                <h3>FOLLOWING</h3>
                </div>
                <hr>
            </section>
            `

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer");
            this.posts.forEach((post) => {
                postscontainer.appendChild(post);
            })
            this.shadowRoot.appendChild(postscontainer);

            const edit = this.ownerDocument.createElement("edit-profile") as EditProfile;
            edit.setAttribute(EditAttribute.username, "username1234");
            edit.setAttribute(EditAttribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            edit.setAttribute(EditAttribute.birth, "25 MARCH 2000")
            this.shadowRoot.appendChild(edit);
    }
}
}

customElements.define("profile-container", ProfileContainer);