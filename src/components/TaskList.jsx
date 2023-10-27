import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'
import { Task } from './Task'



export function TaskList() {
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.createdTitle}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.completedTitle}>
                    <strong>Tarefas concluídas</strong>
                    <span>0</span>
                </div>
            </div>
            <div className={styles.empty}>
                <img src={Clipboard} alt="ícone prancheta" />
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>  
        </div>
        
    )
}