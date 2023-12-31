import Trending from 'components/atoms/Trending';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';


const Home: React.FC = () => {

    return (
        <div>
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

                            <ul className={styles.CourseFeatures}>
                                <li className={styles.FeatureList}>
                                    <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M19.8732 18.8382L25.5418 21.1676V8.83002L19.8732 11.1618V8H5V22H19.8732V18.8382ZM19.8732 13.244L23.6227 11.6991V18.3033L19.8732 16.7632V13.244ZM17.9541 20.0809H6.91912V9.91912H17.9541V20.0809Z" fill="white" />
                                    </svg>
                                    Hybrid Sessions
                                </li>

                                <li className={styles.FeatureList}>
                                    <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 24H9V18H21V24H23V18H25V16H20.91C20.6664 14.6094 19.9402 13.3493 18.8593 12.4412C17.7783 11.5331 16.4118 11.0353 15 11.0353C13.5882 11.0353 12.2217 11.5331 11.1407 12.4412C10.0598 13.3493 9.33361 14.6094 9.09 16H5V18H7V24ZM15 13C15.8863 13.0007 16.7472 13.2956 17.4477 13.8386C18.1481 14.3816 18.6484 15.1419 18.87 16H11.13C11.3516 15.1419 11.8519 14.3816 12.5523 13.8386C13.2528 13.2956 14.1137 13.0007 15 13Z" fill="white" />
                                        <path d="M12 7C12 7.59334 12.1759 8.17336 12.5056 8.66671C12.8352 9.16006 13.3038 9.54458 13.8519 9.77164C14.4001 9.9987 15.0033 10.0581 15.5853 9.94236C16.1672 9.8266 16.7018 9.54088 17.1213 9.12132C17.5409 8.70176 17.8266 8.16721 17.9424 7.58527C18.0581 7.00333 17.9987 6.40013 17.7716 5.85195C17.5446 5.30377 17.1601 4.83524 16.6667 4.50559C16.1734 4.17595 15.5933 4 15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7ZM16 7C16 7.19778 15.9414 7.39112 15.8315 7.55557C15.7216 7.72002 15.5654 7.84819 15.3827 7.92388C15.2 7.99957 14.9989 8.01937 14.8049 7.98079C14.6109 7.9422 14.4327 7.84696 14.2929 7.70711C14.153 7.56725 14.0578 7.38907 14.0192 7.19509C13.9806 7.00111 14.0004 6.80004 14.0761 6.61732C14.1518 6.43459 14.28 6.27841 14.4444 6.16853C14.6089 6.05865 14.8022 6 15 6C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7Z" fill="white" />
                                    </svg>
                                    13k Learners
                                </li>

                                <li className={styles.FeatureList}>
                                    <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M22 5H20V7H10V5H8V7H5V25H25V7H22V5ZM23 23H7V9H23V23Z" fill="white" />
                                        <path d="M11 15H9V17H11V15Z" fill="white" />
                                        <path d="M11 19H9V21H11V19Z" fill="white" />
                                        <path d="M16 11H14V13H16V11Z" fill="white" />
                                        <path d="M16 15H14V17H16V15Z" fill="white" />
                                        <path d="M16 19H14V21H16V19Z" fill="white" />
                                        <path d="M21 11H19V13H21V11Z" fill="white" />
                                        <path d="M21 15H19V17H21V15Z" fill="white" />
                                    </svg>
                                    20 Weeks
                                </li>


                                <li className={styles.FeatureList}>
                                    <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M21 6V5H9V6C7.93913 6 6.92172 6.42143 6.17157 7.17157C5.42143 7.92172 5 8.93913 5 10C5 11.0609 5.42143 12.0783 6.17157 12.8284C6.92172 13.5786 7.93913 14 9 14H9.81C10.2517 14.7631 10.8561 15.4195 11.5803 15.9225C12.3045 16.4254 13.1307 16.7626 14 16.91V19H10.22L8.72 25H21.28L19.78 19H16V16.91C16.8693 16.7626 17.6955 16.4254 18.4197 15.9225C19.1439 15.4195 19.7483 14.7631 20.19 14H21C22.0609 14 23.0783 13.5786 23.8284 12.8284C24.5786 12.0783 25 11.0609 25 10C25 8.93913 24.5786 7.92172 23.8284 7.17157C23.0783 6.42143 22.0609 6 21 6ZM9 12C8.46957 12 7.96086 11.7893 7.58579 11.4142C7.21071 11.0391 7 10.5304 7 10C7 9.46957 7.21071 8.96086 7.58579 8.58579C7.96086 8.21071 8.46957 8 9 8V11C9.00201 11.3353 9.03211 11.6698 9.09 12H9ZM18.72 23H11.28L11.78 21H18.22L18.72 23ZM19 11C19 12.0609 18.5786 13.0783 17.8284 13.8284C17.0783 14.5786 16.0609 15 15 15C13.9391 15 12.9217 14.5786 12.1716 13.8284C11.4214 13.0783 11 12.0609 11 11V7H19V11ZM22.41 11.41C22.0366 11.7856 21.5296 11.9978 21 12H20.91C20.9679 11.6698 20.998 11.3353 21 11V8C21.3943 8.00166 21.7794 8.11985 22.1067 8.33972C22.4341 8.5596 22.6892 8.87134 22.8398 9.23576C22.9905 9.60018 23.0301 10.001 22.9536 10.3879C22.8772 10.7747 22.688 11.1303 22.41 11.41Z" fill="white" />
                                    </svg>
                                    Exclusive Rewards
                                </li>
                            </ul>
                        </div>



                        <div className={styles.CardsBlock}>

                            <div className={styles.Card}>
                                <div className={styles.CardBanner}>
                                    <div className={styles.Badge}>
                                        <Trending />
                                    </div>
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
