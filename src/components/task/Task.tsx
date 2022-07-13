import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';

import styles from './Task.module.css';

interface taskProps {
  id: string,
  content: string,
  isCompleted: boolean,
  completeTask: (id: string) => void,
  deleteTask: (id: string) => void,
}

export function Task({id, content, isCompleted, completeTask, deleteTask}: taskProps) {

  function handleCompleteTask(){
    completeTask(id) 
  }

  function handleDeleteTask(){
    deleteTask(id) 
  }

  return (
    <div className={styles.taskContainer}>
      {
        isCompleted
        ? <button className={styles.buttonCompleted} disabled> 
            <CheckCircle size={24}/> 
          </button>
        : <button  
            className={styles.buttonNotCompleted} 
            onClick={handleCompleteTask}
          > 
            <Circle size={24}/>
          </button>
      }

      {
        isCompleted
        ? <p className={styles.pCompleted}>{content}</p>
        : <p className={styles.pNotCompleted}>{content}</p>
      }
      
      <button onClick={handleDeleteTask}><Trash size={24}/></button>
    </div>
  )
}
