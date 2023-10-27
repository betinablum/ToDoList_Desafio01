import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Task } from './components/Task';
import styles from './App.module.css'
import './global.css';
import { Input } from './components/Input';

const tasks = [
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
]

export function App() {
  // const tasks = useState([
  //   {
  //     id: 1,
  //     isCompleted: false,
  //     content: "Fazer a mala",
  //   },
  //   {
  //     id: 2,
  //     isCompleted: true,
  //     content: "Lavar louça",
  //   },
  // ])
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Input />
        <TaskList />
        {tasks.map(task => {
          return (
            <Task
              content={task.content}
            />
          )
        })}  
      </div>
    </div>

    
    
  )
}
