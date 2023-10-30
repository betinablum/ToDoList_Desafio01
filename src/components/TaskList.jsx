import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import plus from '../assets/plus.svg'
import { useState } from 'react';



export function TaskList() {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          isCompleted: false,
          content: "Fazer a mala",
        },
        {
          id: 2,
          isCompleted: true,
          content: "Lavar louça",
        },
      ])

    function handleCreateNewTask() {
        event.preventDefault()
        console.log(event.target.task)
        // const newTask = event.target.value
        setTasks([...tasks, tasks.length+1])
    }

    return (
        <div className={styles.container}>
            <form onClick={handleCreateNewTask} className={styles.addTask}>
                <textarea 
                    name = 'task'
                    placeholder='Adicione uma nova tarefa'>
                    
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
            <div className={styles.empty}>
                <img src={Clipboard} alt="ícone prancheta" />
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>  
            {tasks.map(task => {
            return (
                <Task
                    content={task.content}
                />
            )
            })}  
        </div>
        
    )
}