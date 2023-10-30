import BoxLoginStyle from "./BoxLogin.css"

class BoxLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${BoxLoginStyle}</style>
            <section>
            <div class=image>
            <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168662038118154300/zyro-image.png?ex=65529456&is=65401f56&hm=eb5204222175bc38b55177a84d8b9e8b8cbd68f9c7f3c0a0e2a34df455630c2f&" alt="" srcset="">
            </div>
            
            <h1>LOG IN</h1>
            <div class=user>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666493194616852/Group_326.png?ex=6552987c&is=6540237c&hm=30a4aadfdb9f701d4a16a30690fea37279108f9b9a370b504d814d708a614fd3&" alt="User Icon">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">
                </div>
                <div class="input-container">
                    <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168666492703875122/Group_327.png?ex=6552987c&is=6540237c&hm=94a595cb017903b639e2a5e645e1f46817c2b8ea712cb87c6eec469073e0e245&" alt="Password Icon">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                </div>
                <div class="options">
                    <button id="Forgot-password">Forgot-password?</button>
                    <button id="Forgot-password">Forgot-password?</button>
                </div>
                <div class"button-login">
                    <button id="login-button">Log In</button>  
                </div>
                <div class="options">
                    <button id="no acount">Don’t have an account? Sing Up</button>
                </div>
            </div>
            </section>
            `
        }
    }
}

customElements.define("box-login", BoxLogin);
export default BoxLogin;