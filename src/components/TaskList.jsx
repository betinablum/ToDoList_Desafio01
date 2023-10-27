import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'
import { CheckCircle, Circle, Trash } from 'phosphor-react'



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
        <ul className={styles.taskList}>
            <li className={styles.uncompleted}>
                <span>
                    <Circle size={17.45}/>
                </span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <button title='Deletar tarefa'>
                    <Trash size={14} />
                </button>
                
            </li>
            <li className={styles.completed}>
                <span>
                    <CheckCircle size={17.45} weight='fill'/>
                </span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <button title='Deletar tarefa'>
                    <Trash size={14} />
                </button>
            </li>
        </ul>
        </div>
        
    )
}