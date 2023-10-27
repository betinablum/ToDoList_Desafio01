import styles from './Header.module.css'
import rocket from "../assets/rocket.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="Logotipo da Rocketseat" />
            <div>
                <span className={styles.text1}>to</span>
                <span className={styles.text2}>do</span>
            </div>
        </header>
    )
}