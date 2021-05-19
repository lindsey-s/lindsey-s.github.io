import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella, faEnvelope, faLaptopCode, faGrinHearts } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const [emailHidden, setEmailHidden] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Lindsey Stevenson</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <section className={styles.row}>
          <div className={styles.left}>
            <span className={styles.hello}>Hi there! I'm</span>
            <h1 className={styles.title}>Lindsey Stevenson</h1>
            <h2 className={styles.subtitle}>Software Developer</h2>
        
            <div className={styles.contactContainer}>

              <div className={styles.contactItem}>
                <FontAwesomeIcon className={styles.contactIcon} icon={faUmbrella} />
                <span>
                  Portland, Oregon
                </span>
              </div>

              <div className={styles.contactItem}>
                <a href='https://www.linkedin.com/in/stevensonlindsey/'>
                  <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} />
                  <span>
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className={styles.contactItem}>
                <a href='https://www.github.com/lindsey-s'>
                  <FontAwesomeIcon className={styles.contactIcon} icon={faGithub} />
                  <span>
                    Github
                  </span>
                </a>
              </div>

              <div className={[styles.contactItem, styles.emailContact].join(' ')} onClick={() => { setEmailHidden(!emailHidden) }}>
                <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} />
                <span>
                  email me
                </span>
                <p id={styles.emailAddress} className={emailHidden ? styles.hidden : ''}>ly DOT stevenson AT gmail DOT com</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.profileImgWrapper}>
              <img src='/profile.JPG' alt='me smiling with my adorable puppy' className={styles.profileImg} />
            </div>
          </div>
        </section>

        <section className={styles.row}>
          <div className={styles.left}>
            <div className={styles.loveCode}>
              <FontAwesomeIcon className={styles.loveIcon} icon={faGrinHearts} />
              <FontAwesomeIcon className={styles.loveIcon} icon={faLaptopCode} />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.about}>
              <h1 className={styles.subtitle}>About Me</h1>
              <p>
                Hello! I'm Lindsey, I'm based in Portland Oregon and 
                I <span className={styles.pinkText}>love</span> developing software. 
                I have rich experience architecting and implementing user-first 
                software from top to bottom and I'm looking for new opportunities. 
                I'm also good at some specific things:
              </p>
              <div className={styles.skills}>
                <ul>
                  <li>Ruby</li>
                  <li>Rails</li>
                  <li>Javascript</li>
                  <li>Node</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>SQL</li>
                  <li>AWS</li>
                  <li>git</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
