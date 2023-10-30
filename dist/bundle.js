(()=>{"use strict";var n={80:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"section{\n    display: flex;\n    height: 10hw;\n    align-items: center;\n    justify-content: space-around;\n    width: 90wh;\n    padding: 4px;\n    border-radius: 14px;\n    gap: 12px;\n}\nsection img{\n    height:  8vw;\n    min-height: 35px;\n    margin: 10px;\n}\n.profilepicture{\n    border-radius: 100%;\n    object-fit: cover;\n    height:  8vw;\n    min-height: 35px;\n    margin: 10px;\n}",""]);const r=a},541:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"section{\n    height: max-content;\n    background-color: #9496E9;\n    width: 20vw;\n    border-radius: 16px;\n    margin: 4px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 8px;\n    gap: 12px;\n}\n\nsection img{\n    width: 90%;\n    aspect-ratio: 1/1;\n    border-radius: 100%;\n    object-fit: cover;\n}\n\nbutton{\n    border-radius: 16px;\n    color: #667FF7;\n    background-color: white;\n    border-style: none;\n    padding: 8px;\n    padding-inline: 24px;\n}\n\n@media (max-width: 540px) {\n    section{\n        width: 42vw;\n    }\n}",""]);const r=a},289:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(255, 255, 255, 0.5);\n    z-index: 999;\n    display: none;\n    font-family: 'Poppins', sans-serif;\n  }\n.appear{\n    display: block;\n}\n\n.modal-content{\n    width: 75vw;\n    height: max-content;\n    background-image: linear-gradient(to right, #667FF7, #BBC3FA);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 24px;\n    border-radius: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n}\n.basic{\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n.basic-pfp{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: max-content;\n}\n.basic-pfp p{\n    margin: 0;\n    font-size: small;\n}\n.profilepicture{\n    width: 28vw;\n    max-width: 200px;\n    aspect-ratio: 1/1;\n    object-fit: cover;\n    border-radius: 100%;\n    margin: 0;\n}\n.basic-username{\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n.input-username{\n    border: none;\n    margin: 0;\n}\n.basic-username button{\n    border-radius: 16px;\n    color: white;\n    background-color: transparent;\n    border-style: solid;\n    border-color: white;\n    padding: 8px;\n    padding-inline: 24px;\n}\n.desc{\n    margin: 24px;\n}\n.desc-bio, .desc-pronouns, .desc-web{\n    margin: 8px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\ninput{\n    border-radius: 16px;\n    color: white;\n    background-color: transparent;\n    border-style: solid;\n    border-color: white;\n    padding: 8px;\n    padding-inline: 24px;\n}\n::placeholder{\n    color: white;\n}\n.birth{\n    height: min-content;\n    margin: 8px;\n    \n}\n.birth h4, .birth p{\n    margin: 0;\n    color: white;\n}\n.birth button, .X{\n    background-color: transparent;\n    border-style: none;\n    color: white;\n}\n.button-save{\n    border-radius: 16px;\n    color: #667FF7;\n    background-color: white;\n    border-style: solid;\n    border-color: #667FF7;\n    padding: 8px;\n    padding-inline: 24px;\n    position: absolute;\n    right: 18px;\n    top: 12px;\n}\n.X{\n    position: absolute;\n    left: 28px;\n    top: 12px;\n}\n\n@media (max-width: 540px) {\n\n    .modal-content{\n        align-items: flex-start;\n        \n    }\n    .basic{\n        flex-direction: column;\n        align-items: baseline;\n    }\n    .basic-pfp{\n        flex-direction: row;\n        align-items: center;\n        gap: 8px;\n    }\n    .profilepicture{\n        min-width: 160px;\n    }\n    .basic-username{\n        align-items: baseline;\n        width: 100%;\n    }\n    .basic-username button{\n        width: 100%;\n    }\n    .desc{\n        margin: 0;\n    }\n    .desc img{\n        display: none;\n    }\n    .desc input{\n        border-style: solid;\n        border-top: transparent;\n        border-left: transparent;\n        border-right: transparent;\n        border-bottom: white;\n        border-width: 4px;\n        margin: 0;\n    }\n}\n\n",""]);const r=a},852:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"section{\n    display: flex;\n    height: 8vh;\n    font-family: 'Poppins';\n    justify-content: space-around;\n    align-items: center;\n    width: 75vw;\n    width: 100%;\n}\n.main-bar-name{\n    display: flex;\n    align-items: center;\n}\n.logo-mobile{\n    display: none;\n}\nh3{\n    color: #667FF7;\n    font-size: medium;\n    margin: 4px;\n}\n.search-bar{\n    display: flex;\n    background-color: white;\n    border-radius: 24px;\n    border-width: 2%;\n    border-style: solid;\n    border-color: #667FF7;\n    padding: 8px;\n    width: 32vw;\n}\n.search-bar input{\n    border-style: none;\n    background-color: transparent;\n    color: gray;\n}\n.main-bar-icons{\n    display: flex;\n    align-items: center;\n\n}\n.main-bar-icons img{\n    margin: 4px;\n}\n.profilepicture{\n    width: 4vh;\n    height: 4vh;\n    border-radius: 100%;\n    object-fit: cover;\n}\n\n\n@media (max-width: 540px) {\n\nh3{\n    display: none;\n}\n.logo-desktop{\n    display: none;\n}\n.logo-mobile{\n    display: block;\n}\n.search-bar{\n    display: none;\n}\n.profilepicture{\n    display: none;\n}\n\n}",""]);const r=a},530:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"section{\n    width: 250px;\n    margin: 8px;\n    font-family: 'Poppins';\n}\n.post-img {\n    width: 250px;\n    border-radius: 16px;\n}\n.post-info{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.profilepicture{\n    width: 4vh;\n    height: 4vh;\n    border-radius: 100%;\n    object-fit: cover;\n}\n.post-heart-mobile{\n    display: none;\n}\n\n@media (max-width: 540px) {\n    section{\n        width: 42vw;\n        position: relative;\n    }\n    .post-img {\n        width: 42vw;\n    }\n    .post-info{\n        position: relative;\n    }\n    .post-heart-mobile{\n        display: block;\n        position: absolute;\n        top: 4px;\n        right: 4px;\n    }\n    .post-heart-desktop{\n        display: none;\n    }\n    .post-buy .profilepicture{\n        width: 8%;\n    }\n}",""]);const r=a},843:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".allprofile{\n    font-family: 'Poppins';\n    background-image: linear-gradient(to right, #667FF7, #BBC3FA);\n    width: 75vw;\n    height: max-content;\n    min-height: 24vh;\n    margin: 12px;\n    border-radius: 30px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    margin-top: 10vh;\n    padding: 8px;\n}\n\n.profilepicture{\n    width: 190px;\n    height: 190px;\n    border-radius: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: -20%;\n    left: 4%;\n}\n\n.profile-user{\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nbutton{\n    border-radius: 16px;\n    color: #667FF7;\n    background-color: white;\n    border-style: none;\n    padding: 8px;\n    padding-inline: 24px;\n}\n\np{\n    margin-bottom: 8px;\n}\n\n@media (max-width: 540px) {\n\n    .profilepicture{\n        height: 100px;\n        width: 100px;\n        min-width: none;\n        min-height: none;\n        top: -4%;\n        left: 8%;\n    }\n\n    .user-stats{\n        position: absolute;\n        bottom: 4px;\n    }\n\n    .profile-user{\n        flex-direction: column;\n        align-items: end;\n        gap: 4px;\n    }\n\n    .allprofile{\n        min-height: 32vh;\n        width: 84vw;\n    }\n}",""]);const r=a},332:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".postscontainer {\n    columns: 250px;\n    gap: 4px;\n    counter-reset: grid;\n    margin-top: 24px;\n  }\n  \n  .postscontainer section + .postscontainer section {\n    margin-top: 4px;\n  }\n  \n  .postscontainer section {\n    break-inside: avoid;\n  }\n  \n  .postscontainer section::before {\n    counter-increment: grid;\n    content: counter(grid);\n  }\n\n@media (max-width: 540px) {\n  \n  .postscontainer {\n        columns: 42vw;\n        gap: 4px;\n        counter-reset: grid;\n      }\n      \n      .postscontainer section + .postscontainer section {\n        margin-top: 4px;\n      }\n      \n      .postscontainer section {\n        break-inside:avoid;\n      }\n      \n      .postscontainer section::before {\n        counter-increment: grid;\n        content: counter(grid);\n      }\n}",""]);const r=a},917:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".barmobile{\n    display: none;\n}\n\n@media (max-width: 540px) {\n    .barmobile{\n        display: flex;\n        position: fixed;\n        bottom: 12px;\n        width: 90vw;\n        background-color: rgb(255, 255, 255);\n        justify-content: space-around;\n        border-radius: 36px;\n        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);\n    }\n}",""]);const r=a},627:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"/*app-profile{\n    display: block;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    justify-content: end;\n    font-family: 'Poppins';\n}*/\n*{\n    font-family: 'Poppins', sans-serif;\n}\n.clothescontainer{\n    display: flex;\n    flex-direction: row;\n    margin-top: 12px;\n    width: 100%;\n    overflow-x: scroll;\n}\n\nmy-profile{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\nh3{\n    color: #667FF7;\n}\n\nhr{\n    border-color: #667FF7;\n    width: 75vw;\n}\n.division{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10vh;\n    margin-bottom: 8px;\n}\n.division div{\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\nnav{\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n.profileposts{\n    margin-top: 12px;\n}\n\n@media (max-width: 540px) {\n\n    .clothescontainer{\n        margin-top: 8px;\n    }\n    .division{\n        margin-top: 12px;\n    }\n}",""]);const r=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,exports:{}};return n[i](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n,e,i=t(852);!function(n){n.NAVIGATE="NAVIGATE"}(n||(n={})),function(n){n.EDITMODAL="EDITMODAL"}(e||(e={}));let o={screen:"PROFILE",editprofile:!1};console.log(o);let s=[];const a=t=>{const i=JSON.parse(JSON.stringify(o));o=((t,i)=>{const{action:o,payload:s}=t;switch(o){case n.NAVIGATE:return Object.assign(Object.assign({},i),{screen:s});case e.EDITMODAL:return Object.assign(Object.assign({},i),{editprofile:s});default:return i}})(t,i),s.forEach((n=>n.render())),console.log(o)},r=n=>{s=[...s,n]};var c;!function(n){n.PROFILE="PROFILE",n.DASHBOARD="DASHBOARD"}(c||(c={}));const p=e=>({action:n.NAVIGATE,payload:e}),d=n=>({action:e.EDITMODAL,payload:n});var l;!function(n){n.username="username",n.profilepicture="profilepicture"}(l||(l={}));class h extends HTMLElement{static get observedAttributes(){return Object.keys({username:null,profilepicture:null})}attributeChangedCallback(n,e,t){this[n]=t,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var n,e,t;this.render();const i=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".profilepicture");null==i||i.addEventListener("click",(()=>{a(p(c.PROFILE))}));const o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".logo-desktop");null==o||o.addEventListener("click",(()=>{a(p(c.DASHBOARD))}));const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".logo-mobile");null==s||s.addEventListener("click",(()=>{a(p(c.DASHBOARD))}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${i.Z}</style>\n            <section>\n            <div class="main-bar-name">\n            <img class="logo-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png" alt="">\n            <img class="logo-mobile" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153024263939440760/OFNYLogoletras.png" alt="">\n            <h3>${this.username}</h3>\n            </div>\n            <div class="search-bar">\n                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153003565049204847/OFNYSearch.png" alt="">\n                <input type="text" placeholder="Search">\n            </div>\n            <div class="main-bar-icons">\n                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760992731186/OFNYNotif.png" alt="">\n                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png" alt="">\n                <img class="profilepicture" src="${this.profilepicture}" alt="">\n            </div>\n            </section>\n            `)}}customElements.define("main-bar",h);var m,u=t(530);!function(n){n.username="username",n.profilepicture="profilepicture",n.post="post",n.like="like"}(m||(m={}));class f extends HTMLElement{static get observedAttributes(){return Object.keys({username:null,profilepicture:null,post:null,like:null})}attributeChangedCallback(n,e,t){this[n]=t,this.render()}constructor(){super(),this.isliked=!1,this.likeClick=()=>{var n;this.isliked=!this.isliked,(null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".heart")).forEach((n=>{this.isliked?n.src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760409722950/OFNYHeart.png":n.src="https://cdn.discordapp.com/attachments/1108887572618412231/1154166566510940230/OFNYHeartline.png"}))},this.attachShadow({mode:"open"}),this.likeClick=this.likeClick.bind(this),this.like="https://cdn.discordapp.com/attachments/1108887572618412231/1154166566510940230/OFNYHeartline.png"}connectedCallback(){var n;this.render();const e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".heart");null==e||e.forEach((n=>{n.addEventListener("click",this.likeClick)}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${u.Z}</style>\n            <section>\n            <img class="post-img" src="${this.post}">\n            <img class="post-heart-mobile heart" src="${this.like}">\n            <div class="post-info">\n                <img class="profilepicture" src="${this.profilepicture}">\n                <p>${this.username}</p>\n                <img class="post-heart-desktop heart" src="${this.like}">\n                <img class="post-buy" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153041634519429120/OFNYbuy.png">\n            </div>\n            </section>\n            `)}}customElements.define("main-post",f);var b,g=t(843);!function(n){n.username="username",n.profilepicture="profilepicture",n.posts="posts",n.following="following",n.followers="followers",n.desc="desc"}(b||(b={}));class x extends HTMLElement{static get observedAttributes(){return Object.keys({username:null,profilepicture:null,posts:null,following:null,followers:null,desc:null})}attributeChangedCallback(n,e,t){switch(n){case b.posts:this.posts=t?Number(t):void 0;break;case b.followers:this.followers=t?Number(t):void 0;break;case b.following:this.following=t?Number(t):void 0;break;default:this[n]=t}this.render()}constructor(){super(),this.attachShadow({mode:"open"}),r(this)}connectedCallback(){var n;this.render();const e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".btnEditProfile");null==e||e.addEventListener("click",this.OpenEditProfile)}OpenEditProfile(){console.log("click"),o.editprofile?a(d(!1)):a(d(!0))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${g.Z}</style>\n            <section class="allprofile">\n                <img class="profilepicture" src="${this.profilepicture}">\n                <section>\n                <div class="profile-user">\n                    <h3>${this.username}</h3>\n                    <button class="btnEditProfile">EDIT PROFILE</button>\n                </div>\n                <p class="user-stats">${this.posts||0} Ofnis    ${this.followers||0} followers ${this.following||0}    following</p>\n                <p>${this.desc||"No description available :("}</p>\n                </section>\n            </section>\n            `)}}customElements.define("my-profile",x);var w,v=t(541);!function(n){n.clothes="clothes"}(w||(w={}));class y extends HTMLElement{static get observedAttributes(){return Object.keys({clothes:null})}attributeChangedCallback(n,e,t){this[n]=t,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${v.Z}</style>\n            <section>\n            <img src="${this.clothes}">\n            <button>SHOP</button>\n            </section>\n            `)}}customElements.define("buy-profile",y);var j,k=t(289);!function(n){n.username="username",n.profilepicture="profilepicture",n.birth="birth"}(j||(j={}));class E extends HTMLElement{static get observedAttributes(){return Object.keys({username:null,profilepicture:null,birth:null})}attributeChangedCallback(n,e,t){this[n]=t,this.render()}constructor(){super(),this.attachShadow({mode:"open"}),r(this)}connectedCallback(){var n,e;this.render();const t=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".modal");o.editprofile?null==t||t.classList.add("appear"):null==t||t.classList.remove("appear");const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".X");null==i||i.addEventListener("click",(()=>{a(d(!1))}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${k.Z}</style>\n            <section class="modal" id="modal">\n                <section class="modal-content">\n                <button class="X">X</button>\n                <button class="button-save">SAVE</button>\n                    <section class="basic">\n                        <div class="basic-pfp">\n                        <img class="profilepicture" src="${this.profilepicture}">\n                        <p>Delete profile picture</p>\n                        </div>\n                        <div class="basic-username">\n                        <input type="text" class="input-username" placeholder="${this.username}"></input>\n                        <button>New Username</button>\n                        </div>\n                    </section>\n                    <section class="desc">\n                        <div class="desc-bio">\n                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">\n                        <input type="text" placeholder="BIO">\n                        </div>\n                        <div class="desc-pronouns">\n                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">\n                        <input type="text" placeholder="PRONOUNS">\n                        </div>\n                        <div class="desc-web">\n                        <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png">\n                        <input type="text" placeholder="WEBSITE">\n                        </div>\n                    </section>\n                    <div class="birth">\n                    <p>BIRTH DATE</p>\n                    <h4>${this.birth}</h4>\n                    <button>Edit</button>\n                    </div>\n                </section>\n            </section>\n            `)}}customElements.define("edit-profile",E);const A=[{username:"saggu",profilepicture:"https://i.pinimg.com/564x/e0/fb/2d/e0fb2da579d0de649bd1285b4ae24abf.jpg",post:"https://i.pinimg.com/564x/43/9e/f9/439ef96f2f9811d0573e78483c0627f7.jpg"},{username:"tynny56",profilepicture:"https://i.pinimg.com/564x/12/a4/3f/12a43f5a54e6feddbaff037db21a2627.jpg",post:"https://i.pinimg.com/564x/05/4e/60/054e6004b69de932cedb13ef686287ee.jpg"},{username:"rosseeee",profilepicture:"https://i.pinimg.com/564x/14/63/08/146308762ff1efa7eb677dfff839df4a.jpg",post:"https://i.pinimg.com/564x/90/70/82/907082fdaabdb49222db44d6a49b4b30.jpg"},{username:"minniee",profilepicture:"https://i.pinimg.com/564x/de/60/1f/de601f041e30056af0ef01ddde10abb3.jpg",post:"https://i.pinimg.com/564x/37/ef/b0/37efb0c02a8b230fe0d027425d8764bc.jpg"},{username:"ilashalimov",profilepicture:"https://i.pinimg.com/564x/94/9f/34/949f347d2afeae7df7087b458cd86149.jpg",post:"https://i.pinimg.com/564x/74/86/a8/7486a86ce9bb88bc8e5968072403302f.jpg"},{username:"y u m ",profilepicture:"https://i.pinimg.com/564x/fc/67/f3/fc67f3d1d28d63d57373b79532fe03c8.jpg",post:"https://i.pinimg.com/564x/ec/0f/a1/ec0fa1b2aa54f66ad784f4089d5bc9a6.jpg"},{username:"livliv",profilepicture:"https://i.pinimg.com/564x/00/03/26/0003265494cd86c14da12d1dce4ee459.jpg",post:"https://i.pinimg.com/564x/69/2f/6c/692f6c12bf7b87da89cf08a51963d1e9.jpg"},{username:"gabby",profilepicture:"https://i.pinimg.com/564x/6a/d6/00/6ad6003f544fc382d25bd41605d89281.jpg",post:"https://i.pinimg.com/564x/88/f9/84/88f984509dcbc219b03b64ea159e3553.jpg"},{username:"wonnie",profilepicture:"https://i.pinimg.com/564x/9f/bd/dd/9fbddd722624e74a5630566878b29926.jpg",post:"https://i.pinimg.com/564x/4d/19/71/4d1971ab16e41f146231f4fcf10ed15b.jpg"},{username:"Hyunnie",profilepicture:"https://i.pinimg.com/564x/ce/01/5d/ce015df517f9b8eec6872ea646ab64b9.jpg",post:"https://i.pinimg.com/564x/a6/5b/ec/a65bec255a10bb4eb2b6bf6ac991ad5c.jpg"},{username:"Elann",profilepicture:"https://i.pinimg.com/564x/e2/e3/bb/e2e3bbc4844f07f410cb2dc197e3bfcc.jpg",post:"https://i.pinimg.com/564x/54/0b/fb/540bfb61d11ad655b2faeb7710473886.jpg"},{username:"Appelpi",profilepicture:"https://i.pinimg.com/564x/dd/f3/e1/ddf3e1b9d5a3c98e0359a46ed86a1cbd.jpg",post:"https://i.pinimg.com/564x/98/63/f8/9863f8c645eb0c3ad4f4c684fec43787.jpg"},{username:"AudreyLoop",profilepicture:"https://i.pinimg.com/564x/d6/84/2a/d6842ab2fd9b9560086681164c34adcf.jpg",post:"https://i.pinimg.com/564x/f1/19/f7/f119f7017037490485f45eba01123d75.jpg"},{username:"SOIR",profilepicture:"https://i.pinimg.com/564x/5d/a2/e0/5da2e0cf22b17984f84a23af49b450d4.jpg",post:"https://i.pinimg.com/564x/6b/08/1a/6b081a16e20ceb77d994429716b1a8c9.jpg"},{username:"chanBang",profilepicture:"https://i.pinimg.com/564x/21/b6/a7/21b6a7f36bf8fd70530ce93b549412f4.jpg",post:"https://i.pinimg.com/564x/cc/48/4c/cc484cae94ab4d47d9df3430bf0f9812.jpg"},{username:"miaVal",profilepicture:"https://i.pinimg.com/564x/79/38/a8/7938a8231b9095bae471c5807e575a12.jpg",post:"https://i.pinimg.com/564x/e2/ae/5a/e2ae5aa79827d422d6a21f3e16636b63.jpg"},{username:"jenKhugs",profilepicture:"https://i.pinimg.com/564x/f3/4c/5d/f34c5d14c1873c988c10d37d7f9f8724.jpg",post:"https://i.pinimg.com/564x/a8/59/9c/a8599cdab3779d9725286bdf9dd0596d.jpg"},{username:"Bin97",profilepicture:"https://i.pinimg.com/564x/bd/72/c6/bd72c6e1d6d2e4b5355d54a14cf9b727.jpg",post:"https://i.pinimg.com/564x/e4/38/23/e4382314ef40875d1a02461739849df5.jpg"},{username:"Rinne",profilepicture:"https://i.pinimg.com/750x/4f/e4/67/4fe467cb78fe00b1760bead0cbcd47c1.jpg",post:"https://i.pinimg.com/564x/ba/9b/71/ba9b716bb1c3548adbe4c5d807f4a3c8.jpg"},{username:"Baldeeo",profilepicture:"https://i.pinimg.com/564x/ce/3d/1c/ce3d1ca2294abb5a92064dd37dcacb25.jpg",post:"https://i.pinimg.com/564x/44/d6/be/44d6bebc00178dd7f407cec6861834bb.jpg"},{username:"outfitswithkay",profilepicture:"https://i.pinimg.com/564x/82/63/2f/82632fb4a7571401ca8b03bac59aff54.jpg",post:"https://i.pinimg.com/564x/34/dc/0a/34dc0af749b444d54d490434f4deec98.jpg"},{username:"Leemin",profilepicture:"https://i.pinimg.com/564x/23/d9/4a/23d94a763406c434a76dac3683a587fc.jpg",post:"https://i.pinimg.com/564x/ae/97/3a/ae973a47f34a88dc31c6fc4db2488bad.jpg"},{username:"lixxieee",profilepicture:"https://i.pinimg.com/564x/92/b2/df/92b2df3f4c5c87fa7f21eb3973f09ca0.jpg",post:"https://i.pinimg.com/564x/49/94/de/4994de9681d682786901a76321ab7571.jpg"},{username:"jaeenan",profilepicture:"https://i.pinimg.com/564x/71/70/fa/7170fac358a41d05fd92290935c575ed.jpg",post:"https://i.pinimg.com/564x/db/58/9b/db589bd912bd49de9381a8c9696ab35c.jpg"},{username:"Hyen",profilepicture:"https://i.pinimg.com/564x/cf/1a/0a/cf1a0ab90705cc122633003dad2f4164.jpg",post:"https://i.pinimg.com/564x/e7/77/03/e777030ab9d6f4bbeaa57338f1192c11.jpg"},{username:"HanJisung",profilepicture:"https://i.pinimg.com/564x/bd/86/36/bd86361152552d1703f544ec20536dd9.jpg",post:"https://i.pinimg.com/564x/df/f9/90/dff99029490a191aa74be49926d562a9.jpg"},{username:"winterInclothes",profilepicture:"https://i.pinimg.com/564x/d5/31/36/d53136640c9993f98ce9d23da6430783.jpg",post:"https://i.pinimg.com/564x/35/bd/19/35bd190710066982e77389e7fa5e67c3.jpg"},{username:"Plutoo",profilepicture:"https://i.pinimg.com/564x/fb/67/32/fb67322707c21c4b51543ab196a738e2.jpg",post:"https://i.pinimg.com/564x/91/3a/4f/913a4fdcfe0cf2f669bb9e314c7dd9c5.jpg"}],O=[{clothes:"https://i.pinimg.com/564x/dd/b9/3d/ddb93df21a5e16c1b74379f71a913473.jpg"},{clothes:"https://i.pinimg.com/474x/3a/3c/62/3a3c624af843b9fcb969f698c8cc4c1f.jpg"},{clothes:"https://i.pinimg.com/474x/85/02/d5/8502d5fca0ca7ba7fe48bbc6ad645fe8.jpg"},{clothes:"https://i.pinimg.com/564x/78/b2/b4/78b2b42e55489fd62966bd578dce9137.jpg"},{clothes:"https://i.pinimg.com/564x/a1/e1/72/a1e172269155a598048f8fa0cf62976b.jpg"}];var L=t(627),R=t(332);class F extends HTMLElement{constructor(){super(),this.posts=[],this.clothes=[],this.attachShadow({mode:"open"}),O.forEach((n=>{const e=this.ownerDocument.createElement("buy-profile");e.setAttribute(w.clothes,n.clothes),this.clothes.push(e)}));for(let n=0;n<5;n++){const e=this.ownerDocument.createElement("main-post");e.setAttribute(m.post,A[n].post),e.setAttribute(m.profilepicture,A[n].profilepicture),e.setAttribute(m.username,A[n].username),this.posts.push(e)}}connectedCallback(){this.render()}OpenEditProfile(){console.log("click")}render(){var n;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n            <style>${L.Z}</style>\n            <style>${R.Z}</style>\n            `;const e=this.ownerDocument.createElement("main-bar");e.setAttribute(l.username,"username1234"),e.setAttribute(l.profilepicture,"https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("my-profile");t.setAttribute(b.username,"username1234"),t.setAttribute(b.profilepicture,"https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg"),t.setAttribute(b.desc,"Hi! I'm Sunny <br> She/ser <br> I like cute clothes and anime"),t.setAttribute(b.followers,"695"),t.setAttribute(b.following,"89"),t.setAttribute(b.posts,"5");const i=null===(n=t.shadowRoot)||void 0===n?void 0:n.querySelector(".btnEditProfile");null==i||i.addEventListener("click",this.OpenEditProfile),this.shadowRoot.appendChild(t);const o=this.ownerDocument.createElement("section");o.classList.add("clothescontainer"),this.clothes.forEach((n=>{o.appendChild(n)})),this.shadowRoot.appendChild(o);const s=this.ownerDocument.createElement("section");s.classList.add("profileposts"),s.innerHTML+="\n            <nav>\n                <h3>OFNIS</h3>\n                <h3>LIKES</h3>\n                <h3>FOLLOWING</h3>\n                </nav>\n                <hr>\n            ";const a=this.ownerDocument.createElement("section");a.classList.add("postscontainer"),this.posts.forEach((n=>{a.appendChild(n)})),s.appendChild(a),this.shadowRoot.appendChild(s);const r=this.ownerDocument.createElement("edit-profile");r.setAttribute(j.username,"username1234"),r.setAttribute(j.profilepicture,"https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg"),r.setAttribute(j.birth,"25 MARCH 2000"),this.shadowRoot.appendChild(r)}}}customElements.define("app-profile",F);var C,S=t(80);!function(n){n.profilepicture="profilepicture"}(C||(C={}));class D extends HTMLElement{static get observedAttributes(){return Object.keys({profilepicture:null})}attributeChangedCallback(n,e,t){this[n]=t,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var n;this.render();const e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".profilepicture");null==e||e.addEventListener("click",(()=>{a(p(c.PROFILE))}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>${S.Z}</style>\n            <section>\n                <img class="logo-desktop" src="https://cdn.discordapp.com/attachments/1108887572618412231/1153002760678146078/OFNYLogo.png" alt="">\n                <img src="https://cdn.discordapp.com/attachments/1108887572618412231/1153003565049204847/OFNYSearch.png" alt="">\n                <img class="profilepicture" src="${this.profilepicture}">\n            </section>\n            `)}}customElements.define("bar-mobile",D);var H=t(917);class T extends HTMLElement{constructor(){super(),this.mainposts=[],this.attachShadow({mode:"open"}),A.forEach((n=>{const e=this.ownerDocument.createElement("main-post");e.setAttribute(m.post,n.post),e.setAttribute(m.profilepicture,n.profilepicture),e.setAttribute(m.username,n.username),this.mainposts.push(e)}))}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML=`\n            <style>${H.Z}</style>\n            <style>${R.Z}</style>\n            `;const n=this.ownerDocument.createElement("main-bar");n.setAttribute(l.username,"username1234"),n.setAttribute(l.profilepicture,"https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg"),this.shadowRoot.appendChild(n);const e=this.ownerDocument.createElement("section");e.classList.add("postscontainer"),this.mainposts.forEach((n=>{e.appendChild(n)})),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("bar-mobile");t.classList.add("barmobile"),t.setAttribute(C.profilepicture,"https://i.pinimg.com/564x/ca/04/0e/ca040ec2ce77e3da8c7da46f34cf8296.jpg"),this.shadowRoot.appendChild(t)}}}customElements.define("app-dashboard",T);class N extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r(this)}connectedCallback(){this.render()}render(){var n,e;switch(this.shadowRoot&&(this.shadowRoot.innerHTML=""),o.screen){case c.PROFILE:const t=this.ownerDocument.createElement("app-profile");null===(n=this.shadowRoot)||void 0===n||n.appendChild(t);break;case c.DASHBOARD:const i=this.ownerDocument.createElement("app-dashboard");null===(e=this.shadowRoot)||void 0===e||e.appendChild(i)}}}customElements.define("app-container",N)})()})();