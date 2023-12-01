import BoxLoginStyle from "./BoxLogin.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { Navigate } from "../../types/store";
import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";
import firebase from "../../utils/firebase";

const formLogin = {
    username: "",
    password: "",
};

class BoxLogin extends HTMLElement {
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
            const btnSingup = this.shadowRoot?.querySelector('#no-acount');
            btnSingup?.addEventListener(('click'), () => {
                dispatch( 
                    navigate(
                        Screens.SINGUP
                    )
                );
            })
            const inputusername = this.shadowRoot?.querySelector('#username');
            inputusername?.addEventListener('change', this.changeUsername);

            const inputpassword = this.shadowRoot?.querySelector('#password');
            inputpassword?.addEventListener('change', this.changePassword);  

            const btmlogin = this.shadowRoot?.querySelector('#login-button');
            btmlogin?.addEventListener('click', this.submitForm);  
    }
    submitForm(){
        firebase.logIn(formLogin.username,formLogin.password);
    }

    changeUsername(e: any){
        formLogin.username = e.target.value;
    }

    changePassword(e:any){
        formLogin.password = e.target.value;
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BoxLoginStyle}</style>
            <section>
            <img class="img" id="imagen "src="${appState.images.login}" alt="" srcset="">
            
            <div id="divinputs" class="user">
            <h1>LOG IN</h1>
                <div class="input-container">
                    <img src="${appState.images.user}" alt="User Icon">
                    <input placeholder="Email" type="text" id="username" name="username">
                </div>
                <div class="input-container">
                    <img src="${appState.images.password}" alt="Password Icon">
                    <input placeholder="Password" type="password" id="password" name="password">
                </div>
                <div class="options">
                    <img class="post-heart-desktop check" src="${appState.images.checkvacio}">
                    <button id="Remember">Remember</button>
                    <button id="Forgot-password">Forgot-password?</button>
                </div>
                <div class"button-login">
                    <button id="login-button">Log In</button>  
                </div>
                <div class="options">
                    <button id="no-acount">Don’t have an account? Sing Up</button>
                </div>
            </div>
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

customElements.define("box-login", BoxLogin);
export default BoxLogin;