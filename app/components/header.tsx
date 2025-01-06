import Image from 'next/image';
import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src='./svg/logo-peruanos-dev.svg' alt="Logo" width={31} height={44} />
            <nav className={styles.header__nav}>
                <Link className={styles.header__navItem} href="/events">Events</Link>
                <button className={styles.header__navButton} aria-label="Toggle Dark Mode">
                    <Image src='./svg/icon-theme.svg' alt="Logo" width={22} height={22} />
                </button>
                <Link href="https://github.com/lperezp/peruanos.dev" target='_blank' className={styles.header__navButton} aria-label="GitHub Repository">
                    <Image src='./svg/icon-github.svg' alt="Logo" width={22} height={22} />
                </Link>
            </nav>
        </header>
    );
}