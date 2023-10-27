import styles from './Input.module.css'
import plus from '../assets/plus.svg'

export function Input() {
    return (
        <form className={styles.addTask}>
            <textarea placeholder='Adicione uma nova tarefa'>
                
            </textarea>
            <button>
                <p>Criar</p>
                <img src={plus} alt="" />
            </button>
        </form>
    )
}