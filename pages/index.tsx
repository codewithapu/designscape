import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';


const Home: React.FC = () => {


    return (
        <div style={{ marginTop: 60 }}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>Edu Burner | Home</title>
                <link rel="icon" href="./favicon.ico" type="image/x-icon" />
            </Head>

            <div className={styles.Wraper}>

                <div className={styles.HeroBanner}>

                    <div className={styles.Overlay}>
                        <div className={styles.UpperComponent}>
                            <p className={styles.originals}>BURNER ORIGINALS</p>
                            <img draggable="false" className={styles.Logo} src="/Essentials/designscapelogo.png" />
                        </div>

                        <button className={styles.Button}>

                            <svg className={styles.StreamIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                                <path d="M13.0809 9.83813L26.6791 17.8601L13.0809 25.6538V9.83813Z" fill="#111111" />
                            </svg>

                            <p className={styles.Label}>
                                watch trailer
                            </p>

                        </button>


                    </div>

                    <img
                        src="/Essentials/bottomGradient.png"
                        className={styles.OverlayGradient}
                        draggable="false"
                    />

                    <video
                        className={styles.BannerTrailer}
                        src="/Essentials/Banners/designscape.webm"
                        loop
                        autoPlay
                        muted

                        draggable="false"
                    >

                    </video>
                </div>

            </div>

        </div>
    );
};

export default Home;
