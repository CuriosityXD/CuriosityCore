class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header class="header">
        <div class="header_content">
            <a href="index.html" class="logo">curiositycore</a>
    
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
                        <a href="" class="nav_link">Contact</a>
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
        background-color: rgb(0, 0, 0);
        font-family: "Montserrat", sans-serif;
        height: 3000px;
        padding-top: 60px;
    }
    
    .header {
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        top: 0;
        width: 100%;
        transition: all 0.2s;
    }
    
    .header_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 60px;
        min-height: 120px;
    }
    
    .logo {
        font-size: 25px;
        font-weight: 500;
        color: #fff;
        transition: all 0.2s;
    }
    
    .logo:hover {
        color: #9797a0;
    }
    
    .nav_list {
        display: flex;
        column-gap: 40px;
    }
    
    .nav_link {
        color: #9797a0;
        font-weight: 500;
        font-size: 1rem;
        transition: all 0.2s;
    }
    
    .nav_link:hover {
        color: #fff;
    }

    @media (max-width: 850px) {\
        .header {
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(6px);
        }

        .header_content {
            flex-direction: column;
            padding: 15px 0;
            row-gap: 8px;
            min-height: 60px;
        }

        .logo {
            align-self: start;
            margin-left: 30px;
        }
    
        .nav_list {
            column-gap: 20px;
        }

        .nav {
            align-self: start;
            margin-left: 30px;
        }
    }
    </style>
        `
    console.log("created custom element");
    }
}

customElements.define('my-header', MyHeader)