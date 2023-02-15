import '../styles/objectArea.css'
import { useState } from 'react';
import { arrPro, num } from '../model/Projeto';




function ObjectArea() {

    const [object, setObject] = useState(arrPro[num]);


    return (

        <div id="blocao">
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

            <div id="TimeLine">
                <h2>Time Line</h2>
                <div id="objTM">
                    {arrPro.map((pro) =>
                        <div id="point" onClick={() => setObject(arrPro[pro.timeLine])}></div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default ObjectArea;