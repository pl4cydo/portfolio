import '../styles/header.css'

function Header() {
    
    return (
        <header>
            <div id="title">
                <h1>Haku</h1>
            </div>
            <div id="haku">
                <img src="./src/images/haku.png" alt="haku" />
            </div>
            <ul>
                <a href="https://github.com/pl4cydo" target="_blank" rel="noreferrer"><li>GitHub</li></a>
                <a href="https://www.linkedin.com/in/pl4cydo/" target="_blank" rel="noreferrer"><li>Linkedin</li></a>
            </ul>
        </header>
    )
}

export default Header;