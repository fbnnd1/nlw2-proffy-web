import React from 'react';

import api from '../../services/api'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

//https://www.w3schools.com/howto/img_avatar.png
export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ( {teacher} ) => {

    function createNewConnection() {
        api.post('connections', {
            user_id : teacher.id
        });
    }

    var url_whatsapp = "https://wa.me/" + teacher.whatsapp; //https://wa.me/${teacher.whatsapp}

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Nome do professor" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora: 
                    <strong>{teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={url_whatsapp}>
                    <img src={WhatsAppIcon} alt="Icone WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;