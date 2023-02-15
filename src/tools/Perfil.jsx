import '../styles/perfil.css'

function Perfil() {
    return (
        <div id="perfilBox">
            <div id="perfilImg">
                <img src="./src/images/placydo.jpeg" alt="placydo" />
            </div>
            <div id="perfilInfo">
                <h3>Plácydo Lima</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div id="insignias">
                <img src="./src/images/badge.png" alt="" />
            </div>
        </div>
    )
}

export default Perfil;