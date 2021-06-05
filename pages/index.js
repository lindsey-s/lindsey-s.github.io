import styles from '/styles/Home.module.css'
import PageWrap from '../components/pageWrap'
import ContactList from '../components/contactList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGrinHearts } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  
  return (
    <PageWrap>
      <div className={styles.container}>
        
        <section className={styles.row}>
          <div className={styles.left}>
            <span className={styles.hello}>Hi there! I'm</span>
            <h1 className={styles.title}>Lindsey Stevenson</h1>
            <h2 className={styles.subtitle}>Software Developer</h2>
        
            <ContactList />
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
      </div>
    </PageWrap>
  )
}
