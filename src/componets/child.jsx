import React from 'react';
import drums from "../assets/drums1.png";
import drum from "../assets/drum1.png";
import drumms from "../assets/drumms1.png";
import mettalDrum from "../assets/mettalDrum1.png";
import metalPlate from "../assets/metalPlate1.png";
import bigDrum from "../assets/bigDrum1.png";
import mp1 from "../assets/sounds/1.mp3";
import metal from "../assets/sounds/metal.mp3"
import mp2 from "../assets/sounds/2.mp3";
import mp3 from "../assets/sounds/3.mp3";
const Child = () => {
    const playAudio = (num) => {
        const audio = document.getElementById(`clickSound-${num}`);
        if (audio) {
            audio.play();
        } else {
            console.error(`Audio element for clickSound-${num} not found`);
        }
    };

    return (
        <div className='child'>
            <h1>Drum <span><img src={drum} style={{ width: "100px", height: "100px", position: "relative", top: "40px" }} alt="Drum Icon" /></span> Kit</h1>
            <div className='drum-kit'>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(1)}></div>
                    <img src={drums} onClick={() => playAudio(1)} alt="Drum 1" />
                    <audio id="clickSound-1" src={mp1}></audio>
                    <h2>w</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1"  onClick={() => playAudio(2)}></div>
                    <img src={drums} onClick={() => playAudio(2)} alt="Drum 2" />
                    <audio id="clickSound-2" src={mp1}></audio>
                    <h2>a</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(3)}></div>
                    <img src={drumms} onClick={() => playAudio(3)} alt="Drum 3" />
                    <audio id="clickSound-3" src={mp2}></audio>
                    <h2>s</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(4)}></div>
                    <img src={drumms} onClick={() => playAudio(4)} alt="Drum 4" />
                    <audio id="clickSound-4" src={mp2}></audio>
                    <h2>d</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(5)}></div>
                    <img src={mettalDrum} onClick={() => playAudio(5)} alt="Drum 5" />
                    <audio id="clickSound-5" src={mp3}></audio>
                    <h2>j</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(6)}></div>
                    <img src={metalPlate} onClick={() => playAudio(6)} alt="Drum 6" />
                    <audio id="clickSound-6" src={metal}></audio>
                    <h2>k</h2>
                </div>
                <div className="drum-set">
                    <div className="drum-set-item-1" onClick={() => playAudio(7)}></div>
                    <img src={bigDrum} onClick={() => playAudio(7)} alt="Drum 7" />
                    <audio id="clickSound-7" src={mp1}></audio>
                    <h2>l</h2>
                </div>
            </div>
        </div>
    );
}

export default Child;
