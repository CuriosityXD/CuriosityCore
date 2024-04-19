class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header class="header">
        <div class="header_content">
            <a href="" class="logo">curiositycore</a>
    
            <div class="nav">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="index.html" class="nav_link">Home</a>
                    </li>
                    <li class="nav_item">
                        <a href="about.html" class="nav_link">About</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_link">Projects</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_btn">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    ul {
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    body {
        background-color: rgb(1, 4, 20);
        font-family: "Montserrat", sans-serif;
        height: 3000px;
        padding-top: 60px;
    }
    
    .header {
        background-color: rgba(1, 4, 20, 0.7);
        position: fixed;
        top: 0;
        width: 100%;
        backdrop-filter: blur(6px);
    }
    
    .header_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        min-height: 60px;
    }
    
    .logo {
        font-size: 25px;
        letter-spacing: -1.5px;
        font-weight: 400;
        color: #fff;
        transition: all 0.2s;
    }
    
    .logo:hover {
        color: rgba(255, 255, 255, 0.65);
    }
    
    .nav_list {
        display: flex;
        column-gap: 40px;
    }
    
    .nav_link {
        color: rgba(255, 255, 255, 0.65);
        font-weight: 400;
        font-size: 15px;
        transition: all 0.2s;
    }
    
    .nav_link:hover {
        color: rgb(255, 255, 255, 1);
    }
    
    .nav_btn {
        background-color: #0071e3;
        color: #fff;
        padding: 7px 18px;
        border-radius: 5000px;
        font-size: 12px;
        text-transform: uppercase;
        transition: all 0.2s;
    }
    
    .nav_btn:hover {
        background-color: rgb(28, 128, 228);
    }

    @media (max-width: 850px) {
        .header_content {
            flex-direction: column;
            padding: 15px 0;
            row-gap: 8px;
        }
    
        .nav_list {
            column-gap: 20px;
        }
    }
    </style>
        `
    console.log("created custom element");
    }
}

customElements.define('my-header', MyHeader)