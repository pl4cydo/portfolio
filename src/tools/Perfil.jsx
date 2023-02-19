import '../styles/perfil.css'

function Perfil() {
    return (
        <div id="perfilBox">
            <div id="perfilImg">
                <img src="./src/images/placydo.jpeg" alt="placydo" />
            </div>
            <div id="perfilInfo">
                <h1>Plácydo Lima</h1>
                <p>Bom dia, boa tarde e boa noite! Este é meu portfólio, tenho 26 anos e atualmente estudo Sistemas para Internet no Instituto Federal de Educação, Ciências e Tecnologias de Pernambuco. O objetivo principal desse projeto é mostrar minha evolução no aprendizado de novas tecnologias em desenvolvimento web, para saber mais vá ao <a id='perfilLink' target="_blank" href="https://www.linkedin.com/in/pl4cydo/">Linkedin</a>  ou siga para os projetos no <a href="https://github.com/pl4cydo" id='perfilLink' target="_blank" rel="noreferrer">GitHub</a>. Abaixo estão algumas tecnologias que utilizei nos projetos.</p>
            </div>
            <div id="insignias">
                <img src="./src/images/badge.png" alt="" />
            </div>
        </div>
    )
}

export default Perfil;