class ArticleCard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('#avatar-img').src = this.getAttribute('img-avatar')
        this.shadowRoot.querySelector('#share-icon').src = this.getAttribute('img-share')
    }
}

const template = document.createElement('template')

template.innerHTML = `

    <style>

    .article-container{
        background-color: white;
        font-size: 13px;
        max-width: 46rem;
        height: 18.8rem;
        display:flex;
        overflow:hidden;
        border-radius: 20px;
    }

    .img-side{
        background-image: url(./images/drawers.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 41.5%;
        height: auto;
    }

    .article-info{
        width:60%;
        padding-left: 2rem;
        padding-top: 0.4rem;
    }

    .user-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user-data{
        display: flex;
        align-items: center;
    }

    #avatar-img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

    .title{
        color: hsl(217, 19%, 35%);
        font-weight: 700;
        font-style: bold;
        font-size: 1.2rem;
        width: 82%;
    }

    .text{
        color: hsl(212, 23%, 69%);
        width: 86%;
        line-height: 25px;
    }

    .user-info{
        width: 90%;
    }
    .users-generals{
        padding-left: 0.7rem;
    }
    p.username{
        color:hsl(217, 19%, 35%);
        font-weight: 700;
        font-style: bold;
        margin-bottom: -0.5rem;
    }

    p.userdate{
        color:hsl(212, 23%, 69%);
    }

    .social{
        width: 30px;
        height: 30px;
        background-color: hsl(212, 23%, 69%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 0.5s;
    }
    
    .social:hover{
        background-color:black;
    }

    #share-icon{
        width: 15px;
        height: 15px;
    }

    

    </style>
    
    <div class="article-card article-container">
            <div class="img-side">
            </div>
            <div class="article-info">
                <h3 class="title"><slot name="title"/></h3>
                <p class="text" ><slot name="text"/></p>
                <div class="user-container">
                    <div class="user-info">
                        <div class="user-data">
                        <img id="avatar-img">
                            <div class="users-generals">
                                <p class="username"><slot name="user-name"/></p>
                                <p class="userdate"><slot name="user-date"/></p>
                            </div>
                        </div>
                        <div class="social">
                            <img id="share-icon"/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
`

window.customElements.define('article-card', ArticleCard)