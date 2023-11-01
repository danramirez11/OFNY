import BoxSingUpStyle from "./BoxSingUp.css"

class BoxSingUp extends HTMLElement {
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
    
}

customElements.define("box-singup", BoxSingUp);
export default BoxSingUp;