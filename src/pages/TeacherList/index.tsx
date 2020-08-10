import React from 'react';

import api from '../../services/api'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import { useState, FormEvent } from 'react';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState('');

    async function searchTeacher(e: FormEvent) {
        e.preventDefault();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container1">
            <PageHeader title="Estes são os proffys disponíveis">
                
                <form id="search-teachers" onSubmit={searchTeacher}>

                <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value);}}
                        options={[
                            {value:'Artes', label:'Artes'},
                            {value:'Biologia', label:'Biologia'},
                            {value:'Ciências', label:'Ciências'},
                            {value:'Educação Física', label:'Educação Física'},
                            {value:'Física', label:'Física'},
                            {value:'Química', label:'Química'},
                            {value:'Geográfica', label:'Geográfica'},
                            {value:'História', label:'História'},
                            {value:'Matemática', label:'Matemática'},
                            {value:'Português', label:'Português'}
                           
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da Semana" 
                        value={week_day}
                        onChange={(event) => {setWeekDay(event.target.value)}}
                        options={[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda'},
                            {value:'2', label:'Terça'},
                            {value:'3', label:'Quarta'},
                            {value:'4', label:'Quinta'},
                            {value:'5', label:'Sexta'},
                            {value:'6', label:'Sábado'}
                            
                        ]}
                    />

                    <Input 
                        name="time" 
                        label="Hora" 
                        type="time" 
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}} 
                    />
                    
                   <button type="submit">
                       Buscar
                   </button>
                    
                </form>
            </PageHeader>

            <main>

                {teachers.map((teacher:Teacher) => 
                {
                    return (<TeacherItem key={teacher.id} teacher={teacher} />);
                }

                )}
                
            </main>
        </div>
    );
}

export default TeacherList;