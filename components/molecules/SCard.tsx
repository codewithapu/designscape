import LogoBadge from 'components/atoms/LogoBadge';
import Trending from 'components/atoms/Trending';
import styles from 'styles/components/molecules/SCard.module.scss'

const SCard = () => {
    return (
        <div className={styles.SCard}>
            <div className={styles.Top}>
                <LogoBadge width={18} height={18} />
                <div className={styles.TrendBadge}>
                    <Trending height={70} width={70}/>
                </div>
            </div>
            <img className={styles.CardBanner} draggable="false" src="https://ik.imagekit.io/eduburner/DesignScape/DSCAPE?updatedAt=1704275139774" />
            <h2 className={styles.CardLabel}>trending today</h2>
        </div>
    )
}

export default SCard;
