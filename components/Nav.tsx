import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from '../styles/components/NavBar.module.scss'
import LogoBadge from './atoms/LogoBadge';
import SearchBar from './atoms/SearchBar';


const Nav: React.FC = () => {

  const { data: session } = useSession()
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta name="description" content="Explore The Odysseys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.NavBar}>

        <div className={styles.TopContent}>

          <LogoBadge />

          <SearchBar />

          <div className={styles.Right}>

            <div className={styles.NavLinks}>
              <div className={styles.Links}>
                <Link href="/" passHref>
                  <a className={styles.SubContainer}>

                    <svg className={styles.Element} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                      <path d="M21.9999 8.48901C14.5378 8.48901 8.48877 14.5382 8.48877 22.0001C8.48877 29.462 14.5378 35.5112 21.9999 35.5112C29.4618 35.5112 35.511 29.462 35.511 22.0001C35.511 14.5382 29.4618 8.48901 21.9999 8.48901ZM21.9999 32.809C16.0398 32.809 11.191 27.9602 11.191 22.0001C11.191 16.04 16.0398 11.1912 21.9999 11.1912C27.96 11.1912 32.8088 16.04 32.8088 22.0001C32.8088 27.9602 27.96 32.809 21.9999 32.809Z" />
                      <path d="M15.2443 28.7557L25.0023 25.0026L28.7554 15.2446L18.9974 18.9977L15.2443 28.7557ZM21.9999 20.2438C22.97 20.2438 23.7564 21.0302 23.7564 22.0001C23.7564 22.9701 22.97 23.7565 21.9999 23.7565C21.0298 23.7565 20.2434 22.9701 20.2434 22.0001C20.2434 21.0302 21.0298 20.2438 21.9999 20.2438Z" />
                    </svg>
                  </a>
                </Link>

                <Link href="/learn" className={styles.Links} passHref>
                  <a className={styles.SubContainer}>

                    <svg className={styles.Element} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.4377 10.1334H27.9398V35.154H25.4377V10.1334Z" fill="#A7A7A7" />
                      <path d="M31.2758 10.1333H33.7779V35.1539H31.2758V10.1333Z" fill="#A7A7A7" />
                      <path d="M11.226 14.9681H13.8166V30.128H11.226V14.9681Z" fill="#A7A7A7" />
                      <path d="M19.4776 11.3172L22.0682 10.1706V35.1173L19.4776 33.9251V11.3172Z" fill="#A7A7A7" />
                      <path d="M11.226 17.6547V14.9681L22.0682 10.1706V12.8572L11.226 17.6547Z" fill="#A7A7A7" />
                      <path d="M11.226 30.128V27.3935L22.0682 32.3828V35.1173L11.226 30.128Z" fill="#A7A7A7" />
                    </svg>
                  </a>
                </Link>


                <Link href="/" className={classNames(styles.Links, asPath.startsWith('/') && styles.Active)} passHref>
                  <a className={styles.SubContainer}>

                    <svg className={styles.Element} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
                      <path d="M23.3413 35.0906L21.762 33.5551L11.3241 23.1204C10.0519 21.8482 9.34998 20.1561 9.34998 18.3574C9.34998 16.5588 10.0519 14.8667 11.3241 13.5944C13.95 10.9685 18.2242 10.9685 20.8532 13.5944L23.3413 16.0825L25.8293 13.5944C28.4552 10.9685 32.7325 10.9685 35.3584 13.5944C37.9843 16.2203 37.9843 20.4945 35.3584 23.1236L23.3444 35.0937L23.3413 35.0906ZM16.0871 14.8071C15.1784 14.8071 14.2696 15.1518 13.5771 15.8443C12.9066 16.5149 12.5368 17.408 12.5368 18.3543C12.5368 19.3006 12.9066 20.1937 13.5771 20.8643L23.3381 30.6253L33.0991 20.8643C34.4842 19.4792 34.4842 17.2262 33.0991 15.8412C31.7141 14.4562 29.4611 14.4562 28.0761 15.8412L25.5692 18.348L23.335 20.5822L18.5939 15.8412C17.9014 15.1487 16.9927 14.804 16.084 14.804L16.0871 14.8071Z" fill="#A7A7A7" />
                    </svg>

                    {/* <span className={styles.ActiveIndicator}></span> */}

                  </a>
                </Link>
              </div>
            </div>

            {session ? (
              <div className={styles.User}>
                {/* Signed in as {session.user?.email} <br /> */}

                <Image
                  className={styles.Avatar}
                  src={session.user.image || "/images/avatar.jpg"}
                  alt="User avatar"

                  width={50}
                  height={50}
                  draggable="false"
                />
                <button className='underline' onClick={() => signOut()}>Sign out</button>
              </div>


            ) : (

              <button className={styles.SignInButton} onClick={() => signIn()}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.AccountLogo} viewBox="0 0 40 40" fill="none">
                  <path d="M19.5854 7.74219C16.1472 7.74219 13.341 10.5485 13.341 13.9865C13.341 17.4246 16.1472 20.2308 19.5854 20.2308C23.0234 20.2308 25.8296 17.4246 25.8296 13.9865C25.8296 10.5485 23.0234 7.74219 19.5854 7.74219ZM19.5854 9.52633C22.0592 9.52633 24.0456 11.5126 24.0456 13.9865C24.0456 16.4604 22.0592 18.4467 19.5854 18.4467C17.1114 18.4467 15.1251 16.4604 15.1251 13.9865C15.1251 11.5126 17.1114 9.52633 19.5854 9.52633ZM13.341 22.0149C9.89709 22.0149 7.09668 24.8154 7.09668 28.2593V32.7195H7.98875H32.074V28.2593C32.074 24.8154 29.2736 22.0149 25.8296 22.0149H13.341ZM13.341 23.7991H25.8296C28.3161 23.7991 30.2899 25.7729 30.2899 28.2593V30.9355H8.88075V28.2593C8.88075 25.7729 10.8546 23.7991 13.341 23.7991Z"

                  />
                </svg>
              </button>
            )}
          </div>
        </div>

      </nav>


    </>
  )
}

export default Nav;
