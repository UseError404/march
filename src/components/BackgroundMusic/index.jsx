import React from 'react';
import './styles.scss'
import audioFile from '../../shere/assets/audio/music.mp3';

function BackgroundMusic({play, setPlay, handlePlay}) {
    const musicRef = React.useRef(null);


    return (
        <div>
            {!play && (
                <div className='music'>
                    <button className='music__button' onClick={()=>handlePlay(musicRef)}>Play</button>
                </div>
            )}
            <audio id='background-music' loop ref={musicRef}>
                <source src={audioFile} type='audio/mpeg' />
                Ваш браузер не поддерживает аудио элемент.
            </audio>
        </div>
    );
}

export default BackgroundMusic;