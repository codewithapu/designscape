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

                <div className={styles.Originals}>
                    <div className={styles.OriginalCards}>
                        <div className={styles.SectionTitle}>
                            <h1 className={styles.Title}>burner academy</h1>
                            <h3 className={styles.Description}>
                                <svg className={styles.Bullet} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="50" />
                                </svg>
                                Refined, exclusive courses <br />
                                reimagined experience</h3>

                            <h4 className={styles.BottomLiner}>explore best curated courses from
                                <div className={styles.Highlight}>
                                    academy
                                    <div className={styles.Before}>
                                        <div className={styles.After}></div>
                                    </div>
                                </div>
                            </h4>
                        </div>

                        <div className={styles.CardsBlock}>

                            <div className={styles.Card}>
                                <div className={styles.CardBanner}>
                                    <h3 className={styles.Badge}>trending</h3>
                                    <img
                                        className={styles.CardBannerImage}
                                        src="https://ik.imagekit.io/eduburner/Essentials/Edu%20Burner%20Pro?updatedAt=1702292814779https://ik.imagekit.io/eduburner/Essentials/Edu%20Burner%20Pro?updatedAt=1702292814779"
                                        draggable="false"
                                    />
                                </div>

                                <div className={styles.CardDetails}>
                                    <h1 className={styles.CardTitle}>Design Scape : Odyssey to human centric design crafting user interfaces</h1>
                                    <p className={styles.CardDescription}>
                                        Learn Figma, variables, building scalable design systems, pages with latest design trends.
                                    </p>
                                </div>

                                <div className={styles.Pricing}>
                                    <img draggable="false" className={styles.AuthorBadge} src="/dtficon.png" />
                                    <p className={styles.Price}>
                                        <span className={styles.RupeeSymbol} style={{ fontSize: 15 }}>₹</span>
                                        3499
                                    </p>
                                </div>
                                <button className={styles.CardButton}>
                                    grab your seat now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        viewBox="0 0 54 54"
                                        fill="none"
                                    >
                                        <path
                                            d="M42.4794 16.6155V19.4483C42.4794 20.7813 42.7849 21.92 43.3958 22.8642C44.0346 23.8362 44.9371 24.4889 46.1036 24.8221L2 24.8221V28.1547L46.1036 28.1547C44.9371 28.488 44.0346 29.1268 43.3958 30.071C42.7849 31.043 42.4794 32.1956 42.4794 33.5286V36.3613L46.0619 36.3613V33.9035C46.0619 32.1817 46.5202 30.7792 47.4366 29.6961C48.3531 28.613 49.6306 28.0714 51.2691 28.0714H51.769V24.9054H51.2691C49.6306 24.9054 48.3531 24.3639 47.4366 23.2808C46.5202 22.1977 46.0619 20.7952 46.0619 19.0733V16.6155H42.4794Z"
                                            fill="#111"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className={styles.Card}>
                                <div className={styles.CardBanner}>
                                    <h3 className={styles.Badge}>trending</h3>
                                    <img
                                        className={styles.CardBannerImage}
                                        src="https://ik.imagekit.io/eduburner/Essentials/Edu%20Burner%20Pro?updatedAt=1702292814779https://ik.imagekit.io/eduburner/Essentials/Edu%20Burner%20Pro?updatedAt=1702292814779"
                                        draggable="false"
                                    />
                                </div>

                                <div className={styles.CardDetails}>
                                    <h1 className={styles.CardTitle}>Design Scape : Odyssey to human centric design crafting user interfaces</h1>
                                    <p className={styles.CardDescription}>
                                        Learn Figma, variables, building scalable design systems, pages with latest design trends.
                                    </p>
                                </div>

                                <div className={styles.Pricing}>
                                    <img draggable="false" className={styles.AuthorBadge} src="/dtficon.png" />
                                    <p className={styles.Price}>
                                        <span className={styles.RupeeSymbol} style={{ fontSize: 15 }}>₹</span>
                                        3499
                                    </p>
                                </div>
                                <button className={styles.CardButton}>
                                    grab your seat now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        viewBox="0 0 54 54"
                                        fill="none"
                                    >
                                        <path
                                            d="M42.4794 16.6155V19.4483C42.4794 20.7813 42.7849 21.92 43.3958 22.8642C44.0346 23.8362 44.9371 24.4889 46.1036 24.8221L2 24.8221V28.1547L46.1036 28.1547C44.9371 28.488 44.0346 29.1268 43.3958 30.071C42.7849 31.043 42.4794 32.1956 42.4794 33.5286V36.3613L46.0619 36.3613V33.9035C46.0619 32.1817 46.5202 30.7792 47.4366 29.6961C48.3531 28.613 49.6306 28.0714 51.2691 28.0714H51.769V24.9054H51.2691C49.6306 24.9054 48.3531 24.3639 47.4366 23.2808C46.5202 22.1977 46.0619 20.7952 46.0619 19.0733V16.6155H42.4794Z"
                                            fill="#111"
                                        />
                                    </svg>
                                </button>
                            </div>

                        </div>



                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;
