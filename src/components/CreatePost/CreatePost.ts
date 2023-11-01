import CreatePostStyle from "./CreatePost.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from "../../store/actions";

export enum CreateAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
}

class CreatePost extends HTMLElement{

    modalPost: boolean = false
    
    username?: string;
    profilepicture?: string;

    static get observedAttributes(){
        const attrs: Record<CreateAttribute,null> = {
            username: null,
            profilepicture: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName:CreateAttribute,oldValue: string | undefined,newValue: string | undefined){
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
        addObserver(this);
    }
    
    connectedCallback(){
        this.render();

        const modal = this.shadowRoot?.querySelector('.modal');

        const btnPost = this.shadowRoot?.querySelector('.btnPost')
        btnPost?.addEventListener(('click'), () => this.showModal(modal))
        
        const btnClose = this.shadowRoot?.querySelector('.X');
        btnClose?.addEventListener(('click'), () => this.showModal(modal))

        const btnMenu = this.shadowRoot?.querySelector('.btnMenu');
        btnMenu?.addEventListener(('click'), () => this.toggleMenu(select))

        const select = this.shadowRoot?.querySelector('.dropdown-menu');
        select?.addEventListener(('change'), () => this.updateTags(select, tagsContainer))

        const tagsContainer = this.shadowRoot?.querySelector('.post-info-tags');
        
    }

    toggleMenu(select: any){
        if (select.style.display === 'none') {
            select.style.display = 'block';
        } else {
            select.style.display = 'none';
        }
    }

    updateTags(select: any, tagsContainer: any){
        tagsContainer.innerHTML = '';

        const selectedOptions = Array.from(select.selectedOptions);

        selectedOptions.forEach((option: any) => {
            const tag = document.createElement('button');
            tag.className = '.button-tag';
            tag.textContent = option.value;
            tag.addEventListener('click', () => {
                select.remove(option.index); 
                tagsContainer.removeChild(tag); 
            });
            tagsContainer.appendChild(tag);
        });
    }

    showModal(modal: any){
        if (this.modalPost){
            this.modalPost = false;
            modal?.classList.remove('appear')
        } else {
            this.modalPost = true;
            modal?.classList.add('appear')
        }
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${CreatePostStyle}</style>

            <div class="btnPost">
            <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1168721226831757312/OFNYLogofullwhite.png?ex=6552cb76&is=65405676&hm=0799a421db5ad330e568478f2056bd692ad71111ccb9d08bd0c19533d96e0e39&">
            </div>

            <section class="modal" id="modal">
                <section class="modal-content">
                <button class="X">X</button>
                <button class="button-upload">OFNY</button>
                <div class="post-info-user-mobile">
                <img class="profilepicture" src="${this.profilepicture}">
                <h4>${this.username}</h4>
                </div>
                    <div class="upload-photo">
                    <img src="https://media.discordapp.net/attachments/1108887572618412231/1168670571152822385/OFNYupload.png?ex=65529c49&is=65402749&hm=527adb16f0bd124e4d44bb325dbe8654004fa7cb31bd3fa9c8e979e5c1a09b68&=&width=486&height=655">
                    <input type="text" placeholder="Upload your OFNY (url)">
                    </div>
                    <section class="post-info">
                    <div class="post-info-user">
                    <img class="profilepicture" src="${this.profilepicture}">
                    <h4>${this.username}</h4>
                    </div>
                    <input type="text" placeholder="CAPTION...">
                    <h4>TAGS</h4>
                    <button class="btnMenu">SEARCH</button>
                    <select class="dropdown-menu" multiple>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="deportivo">Deportivo</option>
                        <option value="gótico">Gótico</option>
                    </select>
                    <section class="post-info-tags">
                    </section>
                    </section>
                </section>
            </section>
            `
        }
    }
}

customElements.define("create-post", CreatePost);
export default CreatePost;