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
//import firebase from "../utils/firebase";

const formPost = {
    tittle: " "
}

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

    /*changeTitle(e: any){
        formPost.tittle = e.target.value;

    }

    submitForm(){
        firebase.addPost(formPost)
    }*/

    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${mainStyle}</style>
            <style>${displayPostStyle}</style>
            `

            /*const posts = await firebase.getPost();
            posts.forEach((post: any) => {
                //acá ya se crea esa vuelta idk like ownder document ykwim
                //se referencia como post.algo
            })*/

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
customElements.define("app-dashboard", MainContainer);