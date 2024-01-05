import Trending from 'components/atoms/Trending';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import SCard from 'components/molecules/SCard';
import CreatorBadge from 'components/atoms/CreatorBadge';
import ReleaseCard from 'components/molecules/ReleaseCard';
import Button from 'components/Button';


const Home: React.FC = () => {

    return (
        <div style={{ marginTop: 70 }}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>Edu Burner | Home</title>
                <link rel="icon" href="./favicon.ico" type="image/x-icon" />
            </Head>

            <div className={styles.Wraper}>

                <div className={styles.Container}>

                    <div className={styles.Updates}>
                        <div className={styles.UpdatesContainer}>
                            <div className={styles.Heading}>
                                <p className={styles.SubHeading}>b.creators - trendsetters </p>
                                <h2 className={styles.SubTitle}>don't miss the <br />latest happenings</h2>
                            </div>

                            <div className={styles.Releases}>
                                <ReleaseCard name={'DesignTheFuture'} username={'dtf'} profilelink={'/'} />
                                <ReleaseCard name={'Edu Burner'} username={'eduburner'} profilelink={'/'} />
                                <ReleaseCard name={'Supriya Mahato'} username={'apu'} profilelink={'/'} />
                            </div>
                        </div>

                        <div className={styles.InnerContainer}>
                            <SCard />
                            <div className={styles.BannerVideo}>
                                <div className={styles.Overlay}>
                                    <CreatorBadge color={'#fff'} username={'eduburner'} profilelink={'/'} />
                                    <div className={styles.BannerDetails}>
                                        <button>
                                            
                                        </button>
                                    </div>
                                </div>
                                <video className={styles.Video} src="Essentials/Banners/designscape.webm" loop autoPlay muted></video>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;