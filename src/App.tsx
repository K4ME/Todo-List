import { useState, FormEvent, ChangeEvent, InputHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react';
import {v4 as uuidv4} from 'uuid';

import Task from './components/task/Task';
import { Empty } from './components/empty/Empty';
import logo from './assets/todo-logo.png';

import styles from './App.module.css';
import './global.css'

interface taskIntrerface {
  id: string;
  content: string;
  isCompleted: boolean;
}

export default function App() {
  const [inputState, setInputState] = useState('');
  const [tasks, setTasks] = useState<taskIntrerface[]>([]);
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    setInputState(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    const id = uuidv4().toString();

    setTasks([...tasks, {
      id,
      content: inputState,
      isCompleted: false,
    }]);

    setInputState('');
  }

  function countCompletedTasks() {
    const completedTask = tasks.filter(task => task.isCompleted === true);

    return completedTask.length;
  }

  function onCompleteTask(id: string){
    const newTasks = tasks.map(task => {
      if(task.id === id){
        task.isCompleted = true;
      }
      return task;
    })

    setTasks(newTasks);
  }

  function onDeleteTask(id: string){
    const newTasks = tasks.filter(task => {
      if((task.id !== id)){
        return task;
      }
    })

    setTasks(newTasks as taskIntrerface[]);
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>

      <form onSubmit={handleCreateNewTask} className={styles.inputConteiner}>
        <input 
          name='inputName'          
          placeholder='Adicione uma nova tarefa'
          required
          value={inputState}
          onChange={handleInputChange}
        />

        <button> Criar <PlusCircle size={16}/></button>
      </form>

      <div className={styles.counters}>
        <strong className={styles.createTask}>
          Tarefas criadas 
          <span> {tasks.length} </span>
        </strong>

        <strong className={styles.finishedTask}>
          Concluídas
          <span> 
            {tasks.length > 0 
              ? `${countCompletedTasks()} de ${tasks.length}`
              : 0
            }
          </span>
        </strong>
      </div>
     
      <div className={styles.tasks}>
        { tasks.length > 0 
          ? tasks.map(task => {
            return (
              <Task 
                key={task.id} 
                id={task.id}
                content={task.content} 
                isCompleted={task.isCompleted}
                completeTask={onCompleteTask}
                deleteTask={onDeleteTask}
              />
            ) 
          })
        
          : <Empty />
        
        }

      </div>
      
     </div>
  )
}
