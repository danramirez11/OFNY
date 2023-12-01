import MainBarStyle from "./MainBar.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { Navigate } from '../../types/store';
import { Screens } from '../../types/navigation';
import { changeuserscreen, navigate } from '../../store/actions';
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
        this.username = appState.user.username;

        const pfp = await firebase.getFile(appState.user.pfp);
        this.profilepicture = pfp;

        this.render();

        const btnProfile = this.shadowRoot?.querySelector('.profilepicture');
        btnProfile?.addEventListener(('click'), () => {
			dispatch( navigate(Screens.PROFILE));
            dispatch(changeuserscreen(`${appState.user.uid}`));
            console.log(appState)
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
            <img class="logo-desktop" src="${appState.images.logo}" alt="">
            <img class="logo-mobile" src="${appState.images.OFNY}" alt="">
            <h3>${this.username}</h3>
            </div>
            <div class="search-bar">
                <img src="${appState.images.search}" alt="">
                <input type="text" placeholder="Search">
            </div>
            <div class="main-bar-icons">
                <img src="${appState.images.alien}" alt="">
                <img src="${appState.images.cormor}" alt="">
                <img class="profilepicture" src="${this.profilepicture}" alt="">
            </div>
            </section>
            `
        }
    }
}

customElements.define("main-bar", MainBar);
export default MainBar;