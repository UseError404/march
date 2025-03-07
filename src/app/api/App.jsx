import React from 'react'
import {BackgroundMusic, Welcome} from "../../components/index.jsx";

import './App.scss';

import capybara1 from '../../shere/assets/img/Capybara1.png';
import capybara2 from '../../shere/assets/img/Capybara2.png';
import capybara3 from '../../shere/assets/img/Capybara3.png';

function App() {
    const [play, setPlay] = React.useState(false);

    const handlePlay = (linkRef) => {
        if (linkRef.current) {
            linkRef.current.play()
                .then(() => {
                    setPlay(true);
                })
                .catch((error) => {
                    console.error('Ошибка при воспроизведении:', error);
                });
        }
    };
    return (
        <div className='march'>
            {play && (
                <div>
                    <Welcome/>
                    <div className="capybara">
                        <div className="capybara__img capybara__img1">
                            <img src={capybara1} alt="capybara"/>
                        </div>
                        <div className="capybara__img capybara__img2">
                            <img src={capybara2} alt="capybara"/>
                        </div>
                        <div className="capybara__img capybara__img3">
                            <img src={capybara3} alt="capybara"/>
                        </div>
                    </div>
                </div>)}
            <BackgroundMusic play={play} setPlay={setPlay} handlePlay={handlePlay}/>
        </div>
    )
}

export default App
