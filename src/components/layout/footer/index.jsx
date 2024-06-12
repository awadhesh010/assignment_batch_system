import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className="container mt-5">
            <footer className="py-4">
                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-3">
                        <Image className="mb-3" src='/assets/logo.png' width={120} height={35} alt="Brand" />
                        <ul className={`nav flex-column ${styles.links}`}>
                            <li className="nav-item mb-3">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    <MdEmail className={styles.icon} />Help@Frybix.com
                                </a></li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-body-secondary"><FaPhone className={styles.icon} /> +1234 45667889</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="row g-2">
                            <div className="col-4 mb-3">
                                <h5 className={styles.headings}>Links</h5>
                                <ul className={`nav flex-column ${styles.links}`}>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Bookings</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                                </ul>
                            </div>

                            <div className="col-4 mb-3">
                                <h5 className={styles.headings}>Legal</h5>
                                <ul className={`nav flex-column ${styles.links}`}>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Term of Use</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cookie Policy</a></li>
                                </ul>
                            </div>

                            <div className="col-4 mb-3">
                                <h5 className={styles.headings}>Product</h5>
                                <ul className={`nav flex-column ${styles.links}`}>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Take Tour</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Live Chat</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Reviews</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>





                    <div className="col-sm-12 col-md-4 mb-3">
                        <form>
                            <h5 className={styles.headings}>Newsletter</h5>
                            <p className={`nav mb-3 flex-column ${styles.links}`}>Stay Up To Date</p>
                            <div className="d-flex justify-content-between flex-sm-row w-100 shadow p-2">
                                <input id="newsletter1" type="text" className={`form-control p-3  ${styles.email_input}`} placeholder="Your email" />
                                <button className="btn btn-dark btn-lg" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center py-4 mt-5 border-top border-secondary ">
                    <p className={`nav flex-column ${styles.links}`}>Copyright 2022 Uifry.Com All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;