import Head from 'next/head'
import { useState } from 'react'
import Scroll from 'react-scroll'

import styles from './Nav.module.css'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('none')

    const routes = [
        { linkto: 'home', title: 'Home' },
        { linkto: 'about', title: 'About' },
        { linkto: 'contact', title: 'Contact' },
    ]

    const handleClick = function(e) {
        // set that menu item as active with styling
        setActiveMenu(e.target.dataset.linkto)

        // scroll to element with id == e.target.dataset.linkto
        Scroll.scroller.scrollTo(e.target.dataset.linkto, {
            duration: 1000,
            delay: 50,
            smooth: true,
        })

    }

    return (
        <>
            <Head>
                <title>Lindsey Stevenson</title>
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>

            <nav className={styles.nav}>
                <div className={[(menuOpen ? styles.menuOpen : styles.menuClosed), styles.menu].join(' ')}>
                    <div className={styles.menuButton} onClick={() => {setMenuOpen(!menuOpen)}}>
                        Menu
                        <ul className={styles.menuItems}>
                        {
                            routes.map((route, i) => (
                                <li key={i}>
                                    <a className={[(activeMenu === route.linkto ? styles['menuItem--active'] : ''), styles.menuItem].join(' ')} 
                                        data-linkto={route.linkto} 
                                        onClick={(e) => { handleClick(e) }}
                                    >
                                        {route.title}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}