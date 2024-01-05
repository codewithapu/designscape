import Link from "next/link";
import styles from '../styles/components/Footer.module.scss'
import LogoBadge from "./atoms/LogoBadge";

const Footer: React.FC = () => (
    <footer className={styles.Footer}>
        <div className={styles.FooterContainer}>
            <LogoBadge color={'#111'} height={10} width={10}/>

            <h2 className={styles.FooterLabel}>unlock your design potential <br />
                with <span className={styles.Highlight}>designscape</span>
            </h2>

            <div className={styles.LinkList}>
                <Link className={styles.Link} href="/">terms</Link>
                <Link className={styles.Link} href="/">socials</Link>
                <Link className={styles.Link} href="/">help</Link>
                <Link className={styles.Link} href="/explore/careers">careers</Link>
            </div>

            <p className={styles.Copyright}>
                © 2023–2024 • COPYRIGHT EDU BURNER
            </p>
        </div>
    </footer>

);

export default Footer;