import CreatorBadge from 'components/atoms/CreatorBadge'
import React from 'react'
import styles from 'styles/components/molecules/ReleaseCard.module.scss'

interface ReleaseCardProps {
    profilelink: string;
    username: string;
    name: string;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ profilelink, name, username }) => {
    return (
        <div className={styles.ReleaseCard}>

            <img
                className={styles.CardBanner}
                src='https://images.unsplash.com/photo-1651649507836-8f84ca48a35c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={styles.CardDetails}>
                <CreatorBadge color={'#000'} username={username} profilelink={profilelink} />
                <h2 className={styles.ReleaseTitle}>
                    {name}
                </h2>
            </div>

        </div>
    )
}

export default ReleaseCard
