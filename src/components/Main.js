import React, { Component } from "react";


import './Main.css';

import Form from  './Form/';
import Tarefas from  './Tarefas/';

export default class Main extends Component {
    
    state = {
        novaTarefa: '',
        tarefas: [ ],
        index: -1,
    };
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;
        this.setState({tarefas});
    }

    componentDidUpdate(prevProps, prevState){
        const {tarefas } = this.state;
        if (tarefas === prevState.tarefas) return;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        const novaTarefas = [... tarefas];
        if (novaTarefa === '') return alert('não permitido valor em branco');
        if(index === -1) {
            this.setState({
                tarefas: [... novaTarefas, novaTarefa],
                novaTarefa:'',
             });
        }else{
            novaTarefas[index] = novaTarefa;
             this.setState({
                tarefas: [... novaTarefas],
               index: -1,
               novaTarefa:'',
             });
        }

        
    }
    handleCHange = (e) => {
        this.setState({
           novaTarefa:e.target.value,
        });
    }
    handleEdit = (e, index) =>{
        const { tarefas }=this.state;
     this.setState({
         index,
         novaTarefa: tarefas[index],
     });
    }
    handleDelete = (e, index) =>{
        const { tarefas }= this.state;
        const novaTarefas = [... tarefas];
        novaTarefas.splice(index, 1);
        this.setState({
            tarefas: [... novaTarefas],
        });
    }

     render() {
         const { novaTarefa, tarefas} = this.state;
         return (
            <div className="main">
                <h1>Tarefas Diárias</h1>
                <Form 
                handleSubmit = {this.handleSubmit}
                handleCHange = {this.handleCHange}
                novaTarefa = {novaTarefa}
                />
                <Tarefas 
                handleDelete = {this.handleDelete}
                handleEdit = {this.handleEdit}
                tarefas = {tarefas}
                /> 
            </div>
         );
    }
}
