import '../styles/objectArea.css'
import {pro1, pro2} from '../model/Projeto'
import { useState } from 'react';

const arrPro = [pro1, pro2];

function soma(n) {
    n = n + 1
}

function ObjectArea() {
    let num = 0;
    
    const [object, setObject] = useState(arrPro[num]);

    return (
        <div id="ObjectArea">
            <div id="tituloObj">
                <h1>Projetos</h1>
                <button onClick={() => {
                    num = num + 1
                    setObject(arrPro[num])
                    }}></button>
                <p>{num}</p>
            </div>
            <div id="obj">
                <h2>{object.titulo}</h2>
                <p>{object.texto}</p>
                <img src={object.imagem} alt={object.titulo} />
                <a href={object.link}>link</a>
            </div>
        </div>
    )
}

export default ObjectArea;