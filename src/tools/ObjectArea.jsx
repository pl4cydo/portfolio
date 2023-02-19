import '../styles/objectArea.css'
import { useState, useEffect } from 'react';
import { arrPro, num } from '../model/Projeto';

let move = 3;

function ObjectArea() {
    const [object, setObject] = useState(arrPro[num]);
    const [jorge, setJorge] = useState(0)
    const [slideTela, setSlideTela] = useState(0)
    let slideInterval;
    let slideTelaCSS;


    function sliderRigth() {
        // console.log(arrPro.length)
        if (move <= (arrPro.length - 1)) {
            move++
            setJorge(jorge - 200)
        }

    }
    function sliderLeft() {
        if (move > 3) {
            move--
            setJorge(jorge + 200)
        }
    }

    function next () {
        setSlideTela(slideTela === object.imagem.length -1 ? 0 : slideTela + 1)
        
    }

    useEffect(() => {
       setSlideTela(0)
    }, []);

    function auto() {
        slideInterval = setInterval(next, 3000)
    }

    useEffect(() => {
        auto();
        return () => clearInterval(slideInterval);
    }, [slideTela])


    // useEffect(() => {
    //     auto();
    // }, [object])

    return (

        <div id="blocao">
            <div id="ObjectArea">
                {/* <div id="tituloObj">
                    <h1>Projetos</h1>
                </div> */}
                <div id="obj">
                    <div id="objEsquerda">
                        <h2 onClick={() => next()}>{object.titulo}</h2>
                        <p>{object.texto}</p>
                        <p>{object.date}</p>
                        <div id="linkArea">
                            <a href={object.link} target="_blank"><img id='linkGit' src="./src/images/github.png" alt="" /></a>
                            <p id='linkInfo'>Link do Projeto</p>
                        </div>
                    </div>
                    <div id="objAreaImg">
                        <div id="slide">
                            <img style={slideTelaCSS} src={object.imagem[slideTela]} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="TimeLine">
                {/* <h2>Time Line</h2> */}
                <img id='arrowSlider' src="./src/images/arrowSlider.png" alt="" onClick={() => sliderLeft()} />
                <img id='arrowSlider2' src="./src/images/arrowSlider.png" alt="" onClick={() => sliderRigth()} />
                <div style={{ 'margin-left': `${jorge}px` }} id="divid">
                    {arrPro.map((pro) =>
                        <div id="objctPreview" onClick={() => {
                            setObject(arrPro[pro.timeLine])
                        }}>
                            <div id="previewTitulo">
                                <h4>{pro.titulo}</h4>
                            </div>
                            <img src={pro.imagem[0]} alt="" />
                        </div>
                    )}
                </div>

            </div>

        </div>

    )
}

export default ObjectArea;