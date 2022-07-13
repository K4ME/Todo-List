import logo from './assets/todo-logo.png';
import { PlusCircle } from 'phosphor-react';

import styles from './App.module.css';

import './global.css'
import Task from './components/task/Task';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>

      <div className={styles.inputConteiner}>
        <input placeholder='Adicione uma nova tarefa'/>
        <button> Criar <PlusCircle size={16}/></button>
      </div>

      <div className={styles.counters}>
        <span className={styles.createTask}>Tarefas criadas</span>
        <span className={styles.finishedTask}>Concluídas</span>
      </div>

      <Task content='tarefa 1'/>
      <Task content='tarefa 2'/>
      <Task content='tarefa 3'/>

     
    </div>
  )
}
