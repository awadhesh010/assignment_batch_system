import styles from './faq.module.css'

const Faq = () => {

    const faq = [
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#FF5555",
            textColor: "#fff"
        },
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#fff",
            textColor: "#000"
        },
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#fff",
            textColor: "#000"
        },
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#FF5555",
            textColor: "#fff",
        },
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#FF5555",
            textColor: "#fff",

        },
        {
            title: "The Best Financial Accounting App Ever!",
            desc: `"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris."`,
            bgColor: "#fff",
            textColor: "#000"
        },

    ]
    return (
        <div className={`container ${styles.container_cust}`}>
            <div className='mb-2 mb-md-5'>
                <h5 className='section_title'>FAQ</h5>
                <h3 className={styles.heading}>Frequently Asked <br /> Questions</h3>
            </div>
            <div className="row mb-3 gy-3">
                {
                    faq.map((item, index) => (
                        <div
                            key={index}

                            className={`col-md-6`}
                        >
                            <div style={{ backgroundColor: item.bgColor }} className={`rounded p-4 animate_zoom`}>
                                <h3 className={styles.faq_section_heading} style={{ color: item.textColor }}>{item.title}</h3>
                                <p className={styles.paragraph} style={{ color: item.textColor }}>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Faq;