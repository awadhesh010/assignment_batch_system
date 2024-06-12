import styles from './faq.module.css'

const Faq_style1 = () => {
    return (
        <div className='container'>
            <div className="row mb-3">
                <div className={`col-md-6 p-3 text-white rounded ${styles.faq_section}`}>
                    <h3 className={styles.faq_section_heading}>The Best Financial Accounting App Ever!</h3>
                    <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."</p>
                </div>

                <div className="col-md-6  p-3 ">
                    <h3 className={styles.faq_section_heading}>The Best Financial Accounting App Ever!</h3>
                    <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."</p>
                </div>
            </div>

        </div>
    )
}


const Faq_style2 = () => {
    return (
        <div className='container'>
            <div className="row mb-3">



                <div className="col-md-6  p-3 ">
                    <h3 className={styles.faq_section_heading}>The Best Financial Accounting App Ever!</h3>
                    <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."</p>
                </div>

                <div  className={`col-md-6 p-3 text-white rounded ${styles.faq_section}`}>
                    <h3 className={styles.faq_section_heading}>The Best Financial Accounting App Ever!</h3>
                    <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."</p>
                </div>
            </div>
        </div>
    )
}


const Faq = () => {
    return (
        <div className={`container ${styles.container_cust}`}>
            <h5 className='section_title'>FAQ</h5>
            <h3 className={styles.heading}>Frequently Asked <br /> Questions</h3>

            <Faq_style1 />
            <Faq_style2 />
            <Faq_style1 />
        </div>
    )
}
export default Faq;