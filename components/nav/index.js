import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

import styles from './Nav.module.css'

const fetchApi = (url) => fetch(url).then((res) => res.json())

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { data, error } = useSWR('/api/pages', fetchApi)
    
    function menuContents() {
        if (error) return <div>Failed to load menu</div>
        if (!data) return <div>Menu Loading...</div>
        
        return (
            <>
                Menu
                <ul className={styles.menuItems}>
                    {
                        data.pages.map((route, i) => (
                            <li key={i}>
                                <Link href={route.path}>{route.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Lindsey Stevenson</title>
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div className={[menuOpen ? styles.menuOpen : styles.menuClosed, styles.menu].join(' ')}>
                    <div className={styles.menuButton} onClick={() => {setMenuOpen(!menuOpen)}}>
                        {menuContents()}
                    </div>
                </div>
            </nav>
        </>
    )
}