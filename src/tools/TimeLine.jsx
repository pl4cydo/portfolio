import '../styles/timeLine.css';
import { arrPro } from '../model/Projeto';

function TimeLine() {

    return (

        <div id="TimeLine">
            <h2>Time Line</h2>
            <div id="objTM">
                {arrPro.map((pro) =>
                    <div id="point"></div>
                )}
            </div>
        </div>
        
    )
}

export default TimeLine;