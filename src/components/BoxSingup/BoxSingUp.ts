import BoxSingUpStyle from "./BoxSingUp.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from "../../types/store";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";
import firebase from "../../utils/firebase";

const formPost = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
};

class BoxSingUp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
        
        const check = this.shadowRoot?.querySelectorAll(".check");
            check?.forEach((check) => {
                check.addEventListener("click", this.checkClick);
            });
        const btnSingup = this.shadowRoot?.querySelector('#singup-button');
             btnSingup?.addEventListener(('click'), () => {
                dispatch( 
                    navigate(
                        Screens.LOGIN
                    )
                );
            })
        const btnLogin = this.shadowRoot?.querySelector('#already-acount');
            btnLogin?.addEventListener(('click'), () => {
                dispatch( 
                    navigate(
                        Screens.LOGIN
                    )
                );
            })

            const inputusername = this.shadowRoot?.querySelector('#username');
            inputusername?.addEventListener('change', this.changeUsername);

            const inputemail = this.shadowRoot?.querySelector('#email');
            inputemail?.addEventListener('change', this.changeEmail);

            const inputpassword = this.shadowRoot?.querySelector('#password');
            inputpassword?.addEventListener('change', this.changePassword);  

            const inputconfirmpassword = this.shadowRoot?.querySelector('#confirm-password');
            inputconfirmpassword?.addEventListener('change', this.changeUsername);

            const btmsingup = this.shadowRoot?.querySelector('#singup-button');
            btmsingup?.addEventListener('click', this.submitForm);  
    }
    submitForm(){
        firebase.logIn(formPost.username,formPost.password);
    }

    changeUsername(e: any){
        formPost.username = e.target.value;
    }

    changePassword(e:any){
        formPost.password = e.target.value;
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BoxSingUpStyle}</style>
            <section>
            <div class=user>
            <h1>SING UP</h1>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666493194616852/Group_326.png?ex=6552987c&is=6540237c&hm=30a4aadfdb9f701d4a16a30690fea37279108f9b9a370b504d814d708a614fd3&" alt="User Icon">
                    <input placeholder="Username" type="text" id="username" name="username">
                </div>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666493194616852/Group_326.png?ex=6552987c&is=6540237c&hm=30a4aadfdb9f701d4a16a30690fea37279108f9b9a370b504d814d708a614fd3&" alt="User Icon">
                    <input placeholder="Email adress" type="text" id="email" name="email">
                </div>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666492703875122/Group_327.png?ex=6552987c&is=6540237c&hm=94a595cb017903b639e2a5e645e1f46817c2b8ea712cb87c6eec469073e0e245&" alt="Password Icon">
                    <input placeholder="Password" type="password" id="password" name="password">
                </div>
                <div class="input-container">
                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666492703875122/Group_327.png?ex=6552987c&is=6540237c&hm=94a595cb017903b639e2a5e645e1f46817c2b8ea712cb87c6eec469073e0e245&" alt="Password Icon">
                <input placeholder="Confirm password" type="password" id="confirm-password" name="confirm-password">
            </div>
                <div class="terms-service">
                <img class="post-heart-desktop check" src="https://cdn.discordapp.com/attachments/1108887572618412231/1169285218528673862/Group_3111.png?ex=6554d8b8&is=654263b8&hm=59a1ef10175f86c38a8f7dda15798a76cf0bdf2f1ecc3cf9e6585f5f133c4f72&">
                    <button id="terms">I agree Terms of Service and Privace Policy</button>
                </div>
                <div class"button-singup">
                    <button id="singup-button">Sing Up</button>  
                </div>
                <div class="already-account">
                <button id="already-acount">Already have an account? Log in</button>
                </div>
            </div>
            <img id="imagen "src="https://cdn.discordapp.com/attachments/1108887572618412231/1169266173930655814/Subtract.png?ex=6554c6fb&is=654251fb&hm=65356a867ede575622f6b1e8b87403b426cd94dcf4833096008c71e067adde5c&">
            </section>
            `
        }
    }
    isliked: boolean = false

    checkClick = () => {
        this.isliked = !this.isliked;
        const check = this.shadowRoot?.querySelectorAll(".check") as NodeListOf<HTMLImageElement>;

        check.forEach((check) => {
        if (this.isliked) {
            check.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1169285218243448973/Group_311.png?ex=6554d8b8&is=654263b8&hm=eb4eb00eca23aee00264abf3df56800956f46e24ea2a462ef32d57c8cf19336b&"
            ;
        } else {
            check.src = "https://cdn.discordapp.com/attachments/1108887572618412231/1169285218528673862/Group_3111.png?ex=6554d8b8&is=654263b8&hm=59a1ef10175f86c38a8f7dda15798a76cf0bdf2f1ecc3cf9e6585f5f133c4f72&"
            ;
        }});
    };
    
}

customElements.define("box-singup", BoxSingUp);
export default BoxSingUp;