import React from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Nome do professor" />
                <div>
                    <strong>Nome do professor</strong>
                    <span>Disciplina</span>
                </div>
            </header>
            <p>
                Descrição. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam esse voluptates rerum earum sunt nesciunt repudiandae numquam, possimus accusantium fuga, reprehenderit enim dignissimos beatae, reiciendis ad facere eum! Alias, excepturi.
            </p>
            <footer>
                <p>
                    Preço/Hora: 
                    <strong>20,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsAppIcon} alt="Icone WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;