import styles from './task.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Task ( {content} ){
    return(
        <ul className={styles.taskList}>
            <li className={styles.uncompleted}>
                <div className={styles.taskContent}>
                    <span>
                        <Circle size={17.45}/>
                    </span>
                    {content}
                </div>
                
                <button title='Deletar tarefa'>
                    <Trash size={14} />
                </button>
                
            </li>
            <li className={styles.completed}>
                <div className={styles.taskContent}>
                    <span>
                        <CheckCircle size={17.45} weight='fill'/>
                    </span>
                    {content}
                </div>
                <button title='Deletar tarefa'>
                    <Trash size={14} />
                </button>
            </li>
        </ul>
    )
}