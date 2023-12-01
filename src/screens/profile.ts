import * as components from "../components/export"
import MainBar, { Attribute } from "../components/MainBar/MainBar";
import MainPost, { PostAttribute } from "../components/MainPost/MainPost";
import BarMobile, { BarMobileAttribute } from "../components/BarMobile/BarMobile";
import Profile, { ProfileAttribute} from "../components/Profile/Profile";
import BuyProfile, { BuyPAttribute} from "../components/BuyProfile/BuyProfile";
import EditProfile, {EditAttribute} from "../components/EditProfile/EditProfile";
import { clothesData } from "../data/clothesData";
import mainStyle from "./main.css";
import profileconStyle from "./profilecon.css";
import displayPostStyle from "./displayPost.css";
import CreatePost, {CreateAttribute} from "../components/CreatePost/CreatePost";
import { getPost, addPost } from "../utils/firebase";
import firebase from "../utils/firebase";
import { appState, dispatch } from "../store";
import { changepost, navigate } from "../store/actions";
import { Screens } from "../types/navigation";

class ProfileContainer extends HTMLElement {

    posts: MainPost[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    OpenEditProfile(){
        console.log("click")
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = " "

            this.shadowRoot.innerHTML = `
            <style>${profileconStyle}</style>
            <style>${displayPostStyle}</style>
            `

            const postData = await firebase.getPostProfile(`${appState.userscreen}`)

            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            this.shadowRoot.appendChild(mainbar);

            const profile = this.ownerDocument.createElement("my-profile") as Profile;
            profile.setAttribute(ProfileAttribute.posts, String(postData.length));
            this.shadowRoot.appendChild(profile);

            const profileposts =  this.ownerDocument.createElement("section");
            profileposts.classList.add("profileposts");
            profileposts.innerHTML += `
            <nav>
                <h3>OFNIS</h3>
                <h3>LIKES</h3>
                </nav>
                <hr>
            `

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer");
        
            profileposts.appendChild(postscontainer);
            this.shadowRoot.appendChild(profileposts)

            const edit = this.ownerDocument.createElement("edit-profile") as EditProfile;
            this.shadowRoot.appendChild(edit);

            const create = this.ownerDocument.createElement("create-post") as CreatePost;
            this.shadowRoot.appendChild(create);

        postData.forEach(async (post: any) => {
            const newpost = this.ownerDocument.createElement("main-post") as MainPost;

            const postperson = await firebase.getProfile(post.user);
            newpost.setAttribute(PostAttribute.username, postperson?.username);

            const pfpurl = await firebase.getFile(postperson?.pfp);
            newpost.setAttribute(PostAttribute.profilepicture, pfpurl);

            const url = await firebase.getFile(post.img);
            newpost.setAttribute(PostAttribute.post, url);
            newpost.setAttribute(PostAttribute.uid, post.id);

            newpost.addEventListener(('click'), () => {
                console.log("imf clicked")
                dispatch(navigate(Screens.POSTDETAILS));
                dispatch(changepost(`${post.id}`));
                console.log("clicked post uid: " + post.id);
                console.log(appState);
            })
            
            postscontainer?.appendChild(newpost)
        })
    }
}
}
customElements.define("app-profile", ProfileContainer);