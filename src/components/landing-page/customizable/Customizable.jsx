import Image from 'next/image';
import styles from './customizable.module.css'
import { MdOutlineStarRate } from "react-icons/md";


const Customizable = () => {
    return (

        <div className={`container ${styles.container_cust}`}>
            <div className="row">
                <div className="col-md-6 order-1 order-md-0">
                    <Image style={{ marginTop: "-60px" }} src="/assets/customizable.png" className='img-fluid' width={"670"} height={"500"} alt='feature' />
                </div>

                <div className="col-md-6 order-0 order-md-1">
                    <div>
                        <h3 className={styles.sub_heading}><MdOutlineStarRate className={styles.icon} /> Fully Customizable</h3>
                        <p>Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam,</p>
                    </div>
                </div>


            </div>


        </div>
    )
}
export default Customizable