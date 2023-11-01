import * as components from "../components/export"
import MainBar, { Attribute } from "../components/MainBar/MainBar";
import MainPost, { PostAttribute } from "../components/MainPost/MainPost";
import BarMobile, { BarMobileAttribute } from "../components/BarMobile/BarMobile";
import Profile, { ProfileAttribute} from "../components/Profile/Profile";
import BuyProfile, { BuyPAttribute} from "../components/BuyProfile/BuyProfile";
import EditProfile, {EditAttribute} from "../components/EditProfile/EditProfile";
import { postData } from "../data/DataMain";
import { clothesData } from "../data/clothesData";
import mainStyle from "./main.css";
import profileconStyle from "./profilecon.css";
import displayPostStyle from "./displayPost.css";
import CreatePost, {CreateAttribute} from "../components/CreatePost/CreatePost";
import { getPost, addPost } from "../utils/firebase";
import firebase from "../utils/firebase";

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

    async connectedCallback(){
        this.render();

    }

    OpenEditProfile(){
        console.log("click")
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

            const profileposts =  this.ownerDocument.createElement("section");
            profileposts.classList.add("profileposts");
            profileposts.innerHTML += `
            <nav>
                <h3>OFNIS</h3>
                <h3>LIKES</h3>
                <h3>FOLLOWING</h3>
                </nav>
                <hr>
            `

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer");
            this.posts.forEach((post) => {
                postscontainer.appendChild(post);
            })
            profileposts.appendChild(postscontainer);
            this.shadowRoot.appendChild(profileposts)

            const edit = this.ownerDocument.createElement("edit-profile") as EditProfile;
            edit.setAttribute(EditAttribute.username, "username1234");
            edit.setAttribute(EditAttribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            edit.setAttribute(EditAttribute.birth, "25 MARCH 2000")
            this.shadowRoot.appendChild(edit);

            const create = this.ownerDocument.createElement("create-post") as CreatePost;
            create.setAttribute(CreateAttribute.username, "username1234");
            create.setAttribute(CreateAttribute.profilepicture, "https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg");
            this.shadowRoot.appendChild(create);
    }
}
}
customElements.define("app-profile", ProfileContainer);