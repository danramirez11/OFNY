import CreatePostStyle from "./CreatePost.css"
import { addObserver, appState, dispatch } from '../../store/index';
import { showmodal } from "../../store/actions";
import firebase from "../../utils/firebase";

export enum CreateAttribute {
    "username" = "username",
    "profilepicture" = "profilepicture",
}

const formPost = {
    desc: " ",
    img: " ",
    user: `${appState.user.uid}`,
    tags: " "
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
    
    async connectedCallback(){

        console.log("cons create")

        this.username = appState.user.username;
        const pfp = await firebase.getFile(appState.user.pfp);
        this.profilepicture = pfp;
        
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

        const imgInput = this.ownerDocument.createElement("input")
        imgInput.type = "file";
        imgInput.classList.add('imgInput');
        imgInput?.addEventListener("change", async () => {
            const file = imgInput.files?.[0];
            if (file) { 
                const fullPath = await firebase.uploadFile(file);
                formPost.img = fullPath;
                console.log("full: " + fullPath);
            }
          });
        const upPhotoDiv = this.shadowRoot?.querySelector('.upload-photo');
        upPhotoDiv?.appendChild(imgInput)

        const captionInput = this.shadowRoot?.querySelector('.captionInput');
        captionInput?.addEventListener("change", this.changeCaption)

        const buttonUpload = this.shadowRoot?.querySelector('.button-upload');
        buttonUpload?.addEventListener("click", () => this.submitForm(modal))

        const dropdownMenu = this.shadowRoot?.querySelector('.dropdown-menu');
        dropdownMenu?.addEventListener("change", this.changeTags)
        
    }

    changeTags(e: any){
        const selectedOptions = Array.from(e.target.selectedOptions).map( (option: any) => option.value);
        formPost.tags = JSON.stringify(selectedOptions);
    }

    changeCaption(e: any){
        formPost.desc = e.target.value
    }

    submitForm(modal: any){
        firebase.addPost(formPost)
        this.showModal(modal)
        this.render()
        console.log(formPost)
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
            <img src="${appState.images.ovniblanc}">
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
                    <img src=""${appState.images.subirpost}"">
                    </div>
                    <section class="post-info">
                    <div class="post-info-user">
                    <img class="profilepicture" src="${this.profilepicture}">
                    <h4>${this.username}</h4>
                    </div>
                    <input type="text" class="captionInput" placeholder="CAPTION...">
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