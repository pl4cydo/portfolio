import '../styles/objectArea.css'
import {arrPro} from '../model/Projeto'
import { useState } from 'react';

function ObjectArea() {
    let num = 3;
    
    const [object, setObject] = useState(arrPro[num]);

    return (
        <div id="ObjectArea">
            <div id="tituloObj">
                <h1>Projetos</h1>
            </div>
            <div id="obj">
                <div id="objEsquerda">
                    <h2>{object.titulo}</h2>
                    <p>{object.texto}</p>
                    <p>{object.date}</p>
                    <a href={object.link} target="_blank">link</a>
                </div>  
                <img src={object.imagem} alt={object.titulo} />
            </div>
        </div>
    )
}

export default ObjectArea;