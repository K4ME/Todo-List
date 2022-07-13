import { ListDashes } from 'phosphor-react';

import clipboard from '../../assets/list-icon.png';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} alt='icone de lista'/>

      <strong>Você ainda não tem tarefas cadastradas</strong>

      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
