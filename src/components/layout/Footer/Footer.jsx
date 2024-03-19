import { Reset } from 'styled-reset';
import styles from './footer.module.css';
import instaIcon from '../../../assets/images/instaIcon.svg';
import fbIcon from '../../../assets/images/fbIcon.svg';
import linkedinIcon from '../../../assets/images/linkedinIcon.svg';
import gitIcon from '../../../assets/images/gitIcon.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Reset />
      <div className={styles.footerContent}>
        <div>
          <ul className={styles.contactLinks}>
        <li><a href="https://www.instagram.com/nat.caruso/" className={styles.footerButton}><img src={instaIcon} alt="Instagram Icon" className={styles.iconImage} /></a></li>
        <li><a href="https://www.facebook.com/nat9288" className={styles.footerButton}><img src={fbIcon} alt="Facebook Icon" className={styles.iconImage} /></a></li>
        <li><a href="https://www.linkedin.com/in/natasha-caruso88/" className={styles.footerButton}><img src={linkedinIcon} alt="Linkedin Icon" className={styles.iconImage} /></a></li>
        <li><a href="https://github.com/nattms88" className={styles.footerButton}><img src={gitIcon} alt="Github Icon" className={styles.iconImage} /></a></li>
        </ul>
        </div>
        <p>Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;