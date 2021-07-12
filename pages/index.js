import styles from '/styles/Home.module.css'
import PageWrap from '../components/pageWrap'
import ContactList from '../components/contactList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGrinHearts } from '@fortawesome/free-solid-svg-icons'
import PageTitle from '../components/pageTitle'

export default function Home() {
  
  return (
    <PageWrap>
      <div className={styles.container}>
        
        <section id='home' className={styles.row}>
          <div className={styles.left}>
            <PageTitle />
          </div>

          <div className={styles.right}>
            <div className={styles.profileImgWrapper}>
              <img src='/profile.JPG' alt='me smiling with my adorable puppy' className={styles.profileImg} />
            </div>
          </div>
        </section>

        <section id='about' className={styles.row}>
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

        <section id={'contact'} className={styles.row}>
          <div className={styles.left}>
            <h1 className={styles.subtitle}>Get in touch</h1>
            <p>I'm actively looking for new opportunities. I would love to hear from you!
                The best way is to email me directly. I look forward to chatting with ya.</p>
            <ContactList />
          </div>
        </section>

        <section className={styles.row}>
          {/* empty section to allow menu links to pull bottom content to top of viewport */}
        </section>
      </div>
    </PageWrap>
  )
}
