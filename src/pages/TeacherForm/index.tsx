import React, {useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import WarningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {
    const history = useHistory();

    const [name, setName]         = useState('');
    const [avatar, setAvatar]     = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio]           = useState('');
    const [subject, setSubject]   = useState('');
    const [cost, setCost]         = useState('');


    const [scheduleItems, setScheduleItems ] = useState([
        {week_day:0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day:0, from: '', to: ''}
        ]);
    }

    function setScheduleItemValue(position:number, field:string, value:string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post("classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(
            () => { alert("Cadastro com sucesso!"); history.push("/");  }
        ).catch(
            () => {
                alert("Erro no cadastro!");
            }
        );
    }

    return (
        <div id="page-teacher-form" className="container1">
            <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preecher esse formulário de inscrição"    
            >
                
            </PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        
                        <Input name="name" label="Nome completo" value={name} onChange={(event) => {setName(event.target.value)} } />

                        <Input name="avatar" label="Avatar" value={avatar} onChange={(event) => {setAvatar(event.target.value)} } />

                        <Input name="whatsapp" label="Whats App" value={whatsapp} onChange={(event) => {setWhatsapp(event.target.value)} } />

                        <Textarea name="bio" label="Biográfia" value={bio} onChange={(event) => {setBio(event.target.value)} } />
                        
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        
                        <Select 
                            value={subject} 
                            onChange={(event) => {setSubject(event.target.value)} }
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
                        
                        <Input name="cost" label="Custo da sua aula por hora" value={cost} onChange={(event) => {setCost(event.target.value)} } />
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>
                        {scheduleItems.map( (scheduleItem, index) => {
                            return ( //index no lugar de scheduleItem.week_day como chave
                                <div key={index} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        onChange={e => setScheduleItemValue(index, "week_day", e.target.value)}
                                        value={scheduleItem.week_day}
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

                                    <Input name="from" label="Das" type="time" onChange={e => setScheduleItemValue(index, "from", e.target.value)} value={scheduleItem.from} />
                                    <Input name="to" label="até" type="time" onChange={e => setScheduleItemValue(index, "to", e.target.value)} value={scheduleItem.to} />
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
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;