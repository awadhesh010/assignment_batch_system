"use client"
import styles from './header.module.css'
import Image from 'next/image'
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light mt-3">
                <div className="container">
                    <div className={`nav-link navbar-brand ${styles.nav_brand}`}>
                        <Image src='/assets/logo.png' width={120} height={35} alt="Brand" />
                        </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${styles.nav_item} ${styles.nav_active}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.nav_item}`} href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.nav_item}`} href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${styles.nav_item}`} href="#">Features</a>
                            </li>
                        </ul>
                        <button className={`btn btn-dark btn-lg custom_btn ${styles.custom_btn}`}>Download</button>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header;