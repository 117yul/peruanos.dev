import Image from 'next/image';
import styles from './community-card.module.scss';
import Link from 'next/link';
import { ICommunity } from '@/app/models/community.model';

export default function CommunityCard({ community }: { community: ICommunity }) {
    return (
        <article>
            <Link href="/" className={styles.card}>
                <div className={styles.card__logo}>
                    <Image className={styles.image} src={community.logo_url} alt={community.name} width={144} height={144} />
                </div>
                <div className={styles.card__info}>
                    <h2 className={styles.card__infoTitle}>{community.name}</h2>
                    <p className={styles.card__infoParagraph}>{community.description}</p>
                    <div className={styles.card__location}>
                        <Image src="./svg/icon-pin.svg" alt="Ubicación" width={16} height={20} />
                        <span>{community.city}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}