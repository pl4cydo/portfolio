import '../styles/objectArea.css'
import { useState } from 'react';
import { arrPro, num } from '../model/Projeto';

let move = 3;

function ObjectArea() {

    const [object, setObject] = useState(arrPro[num]);
    const [jorge, setJorge] = useState(0)

    function sliderRigth() {
        // console.log(arrPro.length)
        if(move <= (arrPro.length - 1)){
            move++
            setJorge(jorge - 200)
            console.log(move)
        }

    }
    function sliderLeft() {
        if(move > 3){
            move--
            setJorge(jorge + 200)
            console.log(move)
        }
    }


    return (

        <div id="blocao">
            <div id="ObjectArea">
                {/* <div id="tituloObj">
                    <h1>Projetos</h1>
                </div> */}
                <div id="obj">
                    <div id="objEsquerda">
                        <h2>{object.titulo}</h2>
                        <p>{object.texto}</p>
                        <p>{object.date}</p>
                        <a href={object.link} target="_blank"><img style={{height: '30px'}} src="./src/images/github.png" alt="" /></a>
                    </div>
                    <div id="objAreaImg">
                        <img src={object.imagem} alt={object.titulo} />
                    </div>
                </div>
            </div>

            <div id="TimeLine">
                {/* <h2>Time Line</h2> */}
                <img id='arrowSlider' src="./src/images/arrowSlider.png" alt="" onClick={() => sliderLeft()}/>
                <img id='arrowSlider2' src="./src/images/arrowSlider.png" alt="" onClick={() => sliderRigth()}/>
                <div style={{ 'margin-left': `${jorge}px` }} id="divid">
                    {arrPro.map((pro) =>
                        <div id="objctPreview" onClick={() => setObject(arrPro[pro.timeLine])}>
                            <h4>{pro.titulo}</h4>
                            <img src={pro.imagem} alt="" />
                        </div>
                    )}
                </div>
                    
            </div>

        </div>

    )
}

export default ObjectArea;