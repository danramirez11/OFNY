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

class MainContainer extends HTMLElement {

    mainposts: MainPost[] = []

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const postData = await firebase.getPost()
        
        postData.forEach(async (post: any) => {
            const newpost = this.ownerDocument.createElement("main-post") as MainPost;
            newpost.setAttribute(PostAttribute.username, post.username);
            newpost.setAttribute(PostAttribute.profilepicture, post.pfp);
            const url = await firebase.getFile(post.img);
            newpost.setAttribute(PostAttribute.post, url);
            newpost.setAttribute(PostAttribute.uid, post.id);
            this.mainposts.push(newpost);
            
        })

        this.render();

        console.log(this.mainposts)
    }

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${mainStyle}</style>
            <style>${displayPostStyle}</style>
            `

            const userData = await firebase.getProfile();

            /*const posts = await firebase.getPost();
            posts.forEach((post: any) => {
                //acá ya se crea esa vuelta idk like ownder document ykwim
                //se referencia como post.algo
            })*/

            const mainbar = this.ownerDocument.createElement("main-bar") as MainBar;
            mainbar.setAttribute(Attribute.profilepicture, userData[0].pfp)
            mainbar.setAttribute(Attribute.username, userData[0].username)
            this.shadowRoot.appendChild(mainbar);

            const postscontainer =  this.ownerDocument.createElement("section");
            postscontainer.classList.add("postscontainer")
            this.mainposts.forEach((post) => {
                postscontainer.appendChild(post);
            })
            this.shadowRoot.appendChild(postscontainer);

            const barmobile = this.ownerDocument.createElement("bar-mobile") as BarMobile;
            barmobile.setAttribute(BarMobileAttribute.profilepicture, userData[0].pfp)
            barmobile.classList.add("barmobile")
            this.shadowRoot.appendChild(barmobile);

            const create = this.ownerDocument.createElement("create-post") as CreatePost;
            create.setAttribute(CreateAttribute.profilepicture, userData[0].pfp)
            create.setAttribute(CreateAttribute.username, userData[0].username)
            this.shadowRoot.appendChild(create);
        }
    }
}
customElements.define("app-dashboard", MainContainer);