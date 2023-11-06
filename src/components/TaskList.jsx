import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'
import plus from '../assets/plus.svg'
import { useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react'



export function TaskList() {
    const [tasks, setTasks] = useState(
       [1]
    )

    // const [newTask, setNewTask] = useState('')

    function handleCreateNewTask() {
        event.preventDefault()
        console.log(event.target.task.value)
        const newTask = event.target.task.value
        setTasks([...tasks, newTask])
    }

    function isTasksEmpty(){
        if (tasks === undefined) {
            return(
                <div className={styles.empty}>
                    <img src={Clipboard} alt="ícone prancheta" />
                    <strong>Você ainda não tem tarefas cadastradas </strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>  
            )
        } else {
            return(
            <ul className={styles.taskList}>
                {tasks.map(task => {
                    if (task.isCompleted === false){
                        return (
                            <li className={styles.uncompleted}>
                                <div className={styles.taskContent}>
                                    <span>
                                        <Circle size={17.45}/>
                                    </span>
                                    {task}
                                </div>
                                
                                <button title='Deletar tarefa'>
                                    <Trash size={14} />
                                </button>    
                            </li>
                        )
                    } else {
                        return (
                            <li className={styles.completed}>
                                <div className={styles.taskContent}>
                                    <span>
                                        <CheckCircle size={17.45} weight='fill'/>
                                    </span>
                                    {task}
                                </div>
                                <button title='Deletar tarefa'>
                                    <Trash size={14} />
                                </button>
                            </li>
                        )
                    }
                })}
                </ul>)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateNewTask} className={styles.addTask}>
                <textarea 
                    name = "task"
                    placeholder="Adicione uma nova tarefa">    
                </textarea>
                <button>
                    <p>Criar</p>
                    <img src={plus} alt="" />
                </button>
            </form>
        
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
            {isTasksEmpty()}
            </div>
        )
}