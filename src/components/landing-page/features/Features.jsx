import Image from 'next/image';
import styles from './features.module.css'
import { MdOutlineStarRate } from "react-icons/md";
import { TbHexagonLetterX } from "react-icons/tb";
import { TbCube } from "react-icons/tb";



const Features = () => {

    const features = [
        {
            title: "Budget Intervals",
            icon: <MdOutlineStarRate className={styles.icon} />,
            desc: "Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Alique Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor."
        },
        {
            title: "Budget Intervals",
            icon: <TbHexagonLetterX className={styles.icon} />,
            desc: "Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Alique Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor."
        },
        {
            title: "Budget Intervals",
            icon: <TbCube className={styles.icon} />,
            desc: "Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Alique Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor."
        }
    ]
    return (
        <div className={`container-fluid overflow-hidden position-relative ${styles.container_cust}`}>
            <Image className="position-absolute" style={{ right: "-120px", top: "1px", zIndex: -1 }} src={'/assets/head_blur.png'} width={350} height={350} alt='blur' />

            <div className="row">
                <div className="col-md-6">
                    <Image style={{ marginTop: "-60px" }} src="/assets/features.png" className='img-fluid' width={"670"} height={"500"} alt='feature' />
                </div>

                <div className="col-md-6 ">
                    <h5 className="section_title">FEATURES</h5>
                    <h3 className="section_heading">Uifry Premium</h3>
                    <div className={styles.feature_group}>
                        {
                            features.map((item, index) => (
                                <div key={index}>
                                    <h5 className={styles.sub_heading}>{item.icon} <span>{item.title}</span></h5>
                                    <p>{item.desc}</p>
                                </div>
                            ))
                        }

                    </div>



                </div>

            </div>

        </div>
    )
}
export default Features