import React from 'react';
import { Link } from 'react-router-dom';

import LogoIMG from '../../assets/images/logo.svg';
import LandingIMG from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import studyClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoIMG} alt='Proffy'  />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={LandingIMG} alt='Plataforma de Estudos' className="hero-image"  />

                <div className="buttons-container">

                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={studyClassIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>

                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>

            </div>
        </div>
        
    );

}

export default Landing;