import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './LinkToResume.module.css'

export default function LinkToResume() {
    return (
        <div className={styles.wrapper}>
            <a className={styles.button} target="_blank" rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1vQwcajqdWvxsDNcXcdnS7-FJ-dc8IWxG/view?usp=sharing">
                <span>Resume</span>
                <FontAwesomeIcon className={styles.icon} icon={faExternalLinkAlt} />
            </a>
        </div>
    )
}