import Trending from 'components/atoms/Trending';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import SCard from 'components/molecules/SCard';


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
                        <SCard />
                        <div className={styles.UpdatesContainer}>
                            <h2 className={styles.SubTitle}>News & Updates</h2>
                            <p className={styles.SubHeading}>new release</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;
