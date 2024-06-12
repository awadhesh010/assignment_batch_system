import Image from 'next/image';
import styles from './advantages.module.css'
import { MdCircleNotifications } from "react-icons/md";

const Advantages = ()=>{
    return(
        <div className={`container ${styles.container_cust}`}>
            <div className="row">
                <div className="col-md-6">
                <h5 className="section_title">ADVANTAGES</h5>
                <h3 className="section_heading">Why Choose Uifry?</h3>
                <h3 className={styles.sub_heading}><MdCircleNotifications className={styles.icon} /> Clever Notifications</h3>

                <p>Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam,</p>
                </div>

                <div className="col-md-6">
                     <Image style={{marginTop:"-60px"}} src="/assets/advantage.png" className='img-fluid' width={"670"} height={"500"} alt='feature' />
                </div>
            </div>

        </div>
    )
}
export default Advantages;