import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import styles from './Nav.module.css'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Head>
                <title>Lindsey Stevenson</title>
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div className={[menuOpen ? styles.menuOpen : styles.menuClosed, styles.menu].join(' ')}>
                    <div className={styles.menuButton} onClick={() => {setMenuOpen(!menuOpen)}}>
                        Menu
                        <ul className={styles.menuItems}>
                            <li>
                                <Link href='/'><a>Home</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}