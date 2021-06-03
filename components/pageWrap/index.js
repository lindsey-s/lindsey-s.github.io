import Nav from '../nav'

import styles from './PageWrap.module.css'

export default function PageWrap({children}) {
    return (
        <div className={styles.container}>
            <Nav />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}