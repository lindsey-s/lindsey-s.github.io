import styles from './PageTitle.module.css'

export default function PageTitle() {
    return (
        <>
            <span className={styles.hello}>Hi there! I'm</span>
            <h1 className={styles.title}>Lindsey Stevenson</h1>
            <h2 className={styles.subtitle}>Software Developer</h2>
        </>
    )
}