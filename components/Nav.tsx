import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/components/NavBar.module.scss'


const Nav: React.FC = () => {
  const { data: session } = useSession()

  const handleAvatarClick = () => {
    // If user is not logged in, redirect to sign-in page
    if (!session) {
      signIn()
    }
  }


  // Path Defined
  const { asPath } = useRouter();

  // HamBurger Overlay Starts
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.785, 0.135, 0.15, 0.86] // Apply cubic-bezier here
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', damping: 18, stiffness: 150 },
        opacity: { duration: 0.5, ease: [0.83, 0, 0.17, 1] } // Apply cubic-bezier here
      }
    },
    exit: {
      y: '100%',
      opacity: 0,
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleBackdropClick = () => {
    setIsOpen(false);
  };
  // Hamburger Overlay Ends



  return (
    <>
      <Head>
        <title>Edu Burner</title>
        <meta name="description" content="Explore The Odysseys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.NavBar}>

        <div className={styles.TopContent}>

          <div className={styles.Left}>
            <Link draggable="false" className={styles.LogoLink} href="/">
              <img draggable="false" className={styles.BurnerLogo} src="/eduburnericon.png" />
            </Link>
          </div>

          <ul className='flex gap-2'>
            {/* {session && (
              <li>
                <Link href="/admin">
                  <a className='underline'>Admin</a>
                </Link>
              </li>
            )} */}
          </ul>


          <div className={styles.Right}>

            <div className={styles.NavLinks}>
              <div>

                <div className='flex-1 flex justify-center'>
                  <Link href="/" passHref>
                    <a>

                      <svg className={styles.Element} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M21.9999 8.48901C14.5378 8.48901 8.48877 14.5382 8.48877 22.0001C8.48877 29.462 14.5378 35.5112 21.9999 35.5112C29.4618 35.5112 35.511 29.462 35.511 22.0001C35.511 14.5382 29.4618 8.48901 21.9999 8.48901ZM21.9999 32.809C16.0398 32.809 11.191 27.9602 11.191 22.0001C11.191 16.04 16.0398 11.1912 21.9999 11.1912C27.96 11.1912 32.8088 16.04 32.8088 22.0001C32.8088 27.9602 27.96 32.809 21.9999 32.809Z" fill="white" />
                        <path d="M15.2443 28.7557L25.0023 25.0026L28.7554 15.2446L18.9974 18.9977L15.2443 28.7557ZM21.9999 20.2438C22.97 20.2438 23.7564 21.0302 23.7564 22.0001C23.7564 22.9701 22.97 23.7565 21.9999 23.7565C21.0298 23.7565 20.2434 22.9701 20.2434 22.0001C20.2434 21.0302 21.0298 20.2438 21.9999 20.2438Z" fill="white" />
                      </svg>

                      <span className={styles.ActiveIndicator}></span>

                    </a>
                  </Link>

                  <Link href="/learn" passHref>
                    <a className="flex justify-center items-center">

                      <svg className={styles.Element} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.4377 10.1334H27.9398V35.154H25.4377V10.1334Z" fill="#A7A7A7" />
                        <path d="M31.2758 10.1333H33.7779V35.1539H31.2758V10.1333Z" fill="#A7A7A7" />
                        <path d="M11.226 14.9681H13.8166V30.128H11.226V14.9681Z" fill="#A7A7A7" />
                        <path d="M19.4776 11.3172L22.0682 10.1706V35.1173L19.4776 33.9251V11.3172Z" fill="#A7A7A7" />
                        <path d="M11.226 17.6547V14.9681L22.0682 10.1706V12.8572L11.226 17.6547Z" fill="#A7A7A7" />
                        <path d="M11.226 30.128V27.3935L22.0682 32.3828V35.1173L11.226 30.128Z" fill="#A7A7A7" />
                      </svg>

                      <span className={styles.ActiveIndicator}></span>

                    </a>
                  </Link>


                  <Link href="/" className={classNames(styles.Link, asPath.startsWith('/') && styles.Active)} passHref>
                    <a className="flex justify-center items-center">
                      
                      <svg className={styles.Element} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M23.3413 35.0906L21.762 33.5551L11.3241 23.1204C10.0519 21.8482 9.34998 20.1561 9.34998 18.3574C9.34998 16.5588 10.0519 14.8667 11.3241 13.5944C13.95 10.9685 18.2242 10.9685 20.8532 13.5944L23.3413 16.0825L25.8293 13.5944C28.4552 10.9685 32.7325 10.9685 35.3584 13.5944C37.9843 16.2203 37.9843 20.4945 35.3584 23.1236L23.3444 35.0937L23.3413 35.0906ZM16.0871 14.8071C15.1784 14.8071 14.2696 15.1518 13.5771 15.8443C12.9066 16.5149 12.5368 17.408 12.5368 18.3543C12.5368 19.3006 12.9066 20.1937 13.5771 20.8643L23.3381 30.6253L33.0991 20.8643C34.4842 19.4792 34.4842 17.2262 33.0991 15.8412C31.7141 14.4562 29.4611 14.4562 28.0761 15.8412L25.5692 18.348L23.335 20.5822L18.5939 15.8412C17.9014 15.1487 16.9927 14.804 16.084 14.804L16.0871 14.8071Z" fill="#A7A7A7" />
                      </svg>

                      <span className={styles.ActiveIndicator}></span>

                    </a>
                  </Link>
                </div>


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
              <p>
                <button onClick={() => signIn()}>Sign in with GitHub</button>
              </p>
            )}
          </div>
        </div>

      </nav>


    </>
  )
}

export default Nav;
