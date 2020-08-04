import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import LogoIMG from '../../assets/images/logo.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container1">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img alt="Voltar" src={backIcon} />
                    </Link>
                    <img alt="Proffy" src={LogoIMG} />
                </div>
                <div className="header-content">
                    <strong>
                        Estes são os proffys disponíveis
                    </strong>
                </div>
            </header>
        </div>
    );
}

export default TeacherList;