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
import firebase from "../utils/firebase";
import CreatePost, {CreateAttribute} from "../components/CreatePost/CreatePost";
import { appState, dispatch } from "../store";
import { changepost, navigate } from "../store/actions";
import { Screens } from "../types/navigation";

class MainContainer extends HTMLElement {

    mainposts: MainPost[] = []

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${mainStyle}</style>
            <style>${displayPostStyle}</style>
            `

            //const userData = await firebase.getProfile();


            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            /*mainbar.setAttribute(Attribute.profilepicture, userData[0].pfp)
            mainbar.setAttribute(Attribute.username, userData[0].username)*/
            this.shadowRoot.appendChild(mainbar);

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer")
            this.shadowRoot.appendChild(postscontainer);

            const barmobile = this.ownerDocument.createElement("bar-mobile") as BarMobile;
            //barmobile.setAttribute(BarMobileAttribute.profilepicture, userData[0].pfp)
            barmobile.classList.add("barmobile")
            this.shadowRoot.appendChild(barmobile);

            const create = this.ownerDocument.createElement("create-post") as CreatePost;
            create.setAttribute(CreateAttribute.profilepicture, "uu")
            //create.setAttribute(CreateAttribute.username, userData[0].username)
            this.shadowRoot.appendChild(create);

            

            const postData = await firebase.getPost()
        
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
customElements.define("app-dashboard", MainContainer);