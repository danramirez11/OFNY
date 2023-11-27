import MainBarStyle from "./MainBar.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { Navigate } from '../../types/store';
import { Screens } from '../../types/navigation';
import { navigate } from '../../store/actions';
import firebase from "../../utils/firebase";


export enum Attribute {
    "username" = "username",
    "profilepicture" = "profilepicture"
}

class MainBar extends HTMLElement{
    
    username?: string;
    profilepicture?: string;
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            username: null,
            profilepicture: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    async connectedCallback(){
        this.render();

        const btnProfile = this.shadowRoot?.querySelector('.profilepicture');
        btnProfile?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.PROFILE
				)
			);
        })

        const btnMain = this.shadowRoot?.querySelector('.logo-desktop');
        btnMain?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.DASHBOARD
				)
			);
        })

        const btnMainMobile = this.shadowRoot?.querySelector('.logo-mobile');
        btnMainMobile?.addEventListener(('click'), () => {
			dispatch( 
				navigate(
					Screens.DASHBOARD
				)
			);
        })

        
    }
    
    render(){

        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${MainBarStyle}</style>
            <section>
            <div class="main-bar-name">
            <img class="logo-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png" alt="">
            <img class="logo-mobile" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153024263939440760/OFNYLogoletras.png" alt="">
            <h3>${this.username}</h3>
            </div>
            <div class="search-bar">
                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153003565049204847/OFNYSearch.png" alt="">
                <input type="text" placeholder="Search">
            </div>
            <div class="main-bar-icons">
                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760992731186/OFNYNotif.png" alt="">
                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png" alt="">
                <img class="profilepicture" src="${this.profilepicture}" alt="">
            </div>
            </section>
            `
        }
    }
}

customElements.define("main-bar", MainBar);
export default MainBar;