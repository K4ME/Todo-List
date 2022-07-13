import { CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface taskProps {
  content: string
}

export default function Task({content}: taskProps) {
  return (
    <div className={styles.taskContainer}>
      <button><CheckCircle size={24}/></button>
      <p>{content}</p>
      <button><Trash size={24}/></button>
    </div>
  )
}
