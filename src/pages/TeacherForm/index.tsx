import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import WarningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {

    const [scheduleItems, setScheduleItems ] = useState([
        {week_day:0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day:0, from: '', to: ''}
        ]);
    }

    return (
        <div id="page-teacher-form" className="container1">
            <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preecher esse formulário de inscrição"    
            >
                
            </PageHeader>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    
                    <Input name="name" label="Nome completo" />

                    <Input name="avatar" label="Avatar" />

                    <Input name="whatsapp" label="Whats App" />

                    <Textarea name="bio" label="Biográfia" />
                    
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    
                    <Select 
                        name="subject" 
                        label="Matéria" 
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
                    
                    <Input name="cost" label="Custo da sua aula por hora" />
                    
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                    {scheduleItems.map( scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da Semana" 
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

                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="até" type="time" />
                            </div>
                        );
                    })}
                    

                </fieldset>

                <footer>
                    <p>
                        <img src={WarningIcon} alt="Aviso importante" />
                        Importante!<br />
                        Preencha todos os dados.
                        <button type="button">Salvar caastro</button>
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;