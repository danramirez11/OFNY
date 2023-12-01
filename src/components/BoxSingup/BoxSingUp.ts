import BoxSingUpStyle from "./BoxSingUp.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from "../../types/store";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";
import firebase from "../../utils/firebase";

const formSingup = {
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
            inputconfirmpassword?.addEventListener('change', this.changeConfirmPassword);

            const btmsingup = this.shadowRoot?.querySelector('#singup-button');
            btmsingup?.addEventListener('click', this.submitForm);  
    }
    async submitForm(){
        const createuser = await firebase.createUser(formSingup.username,formSingup.email,formSingup.password, formSingup.confirmpassword );
        if (createuser) {dispatch (navigate(Screens.LOGIN))}
    }

    changeUsername(e: any){
        formSingup.username = e.target.value;
    }
    changeEmail(e: any){
        formSingup.email = e.target.value;
    }
    changePassword(e:any){
        formSingup.password = e.target.value;
    }
    changeConfirmPassword(e:any){
        formSingup.confirmpassword = e.target.value;
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BoxSingUpStyle}</style>
            <section>
            <div id="divinputs" class=user>
            <h1>SING UP</h1>
                <div class="input-container">
                    <img src="${appState.images.user}" alt="User Icon">
                    <input placeholder="Username" type="text" id="username" name="username">
                </div>
                <div class="input-container">
                    <img src="${appState.images.user}" alt="User Icon">
                    <input placeholder="Email adress" type="text" id="email" name="email">
                </div>
                <div class="input-container">
                    <img src="${appState.images.password}" alt="Password Icon">
                    <input placeholder="Password" type="password" id="password" name="password">
                </div>
                <div class="input-container">
                <img src="${appState.images.password}" alt="Password Icon">
                <input placeholder="Confirm password" type="password" id="confirm-password" name="confirm-password">
            </div>
                <div class="terms-service">
                <img class="post-heart-desktop check" src="${appState.images.checkvacio}">
                    <button id="terms">I agree Terms of Service and Privace Policy</button>
                </div>
                <div class"button-singup">
                    <button id="singup-button">Sing Up</button>  
                </div>
                <div class="already-account">
                <button id="already-acount">Already have an account? Log in</button>
                </div>
            </div>
            <img class="img" id="imagen "src="${appState.images.singup}">
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
            check.src = `${appState.images.check}`
            ;
        } else {
            check.src = `${appState.images.checkvacio}`
            ;
        }});
    };
    
}

customElements.define("box-singup", BoxSingUp);
export default BoxSingUp;