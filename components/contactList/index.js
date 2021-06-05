import { useState } from 'react'
import useCopyToClipboard from '../../utils/useCopyToClipboard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella, faEnvelope, faClipboardList, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from './ContactList.module.css'

export default function ContactList() {
    const [emailHidden, setEmailHidden] = useState(true)
    const [emailCopied, handleCopy] = useCopyToClipboard(5000)

    return (
        <div className={styles.container}>

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

            <div className={styles.contactItem}>
                <div className={styles.emailContact} onClick={() => { setEmailHidden(!emailHidden) }}>
                    <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} />
                    <span>
                        email me
                  </span>
                </div>
                <div className={emailHidden ? styles.hidden : ''}>
                    <p className={styles.emailAddress}>ly DOT stevenson AT gmail DOT com</p>
                    <div className={styles.copyEmailIcon} onClick={() => handleCopy('ly.stevenson@gmail.com')}>
                        {emailCopied ?
                            <FontAwesomeIcon icon={faCheck} className={styles.contactIcon} /> :
                            <FontAwesomeIcon icon={faClipboardList} className={styles.contactIcon} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}