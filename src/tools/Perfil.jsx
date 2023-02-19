import '../styles/perfil.css'

function Perfil() {
    return (
        <div id="perfilBox">
            <div id="perfilImg">
                <img src="./src/images/placydo.jpeg" alt="placydo" />
            </div>
            <div id="perfilInfo">
                <h1>Plácydo Lima</h1>
                <p>Bom dia, boa tarde e boa noite! Este é meu portfólio, tenho 26 anos e atualmente estudo Sistemas para Internet no Institudo Federal de Educação, Ciências e Tecnologias de Pernambuco. O objetivo principal desse projeto é mostrar minha evolução aprendendo o desenvolvimento web, para saber mais vá ao linkedin ou siga para os projetos no github. A baixo estão algumas tecnologias que ultilizei nos projetos.</p>
            </div>
            <div id="insignias">
                <img src="./src/images/badge.png" alt="" />
            </div>
        </div>
    )
}

export default Perfil;