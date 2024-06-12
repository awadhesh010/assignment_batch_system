import Image from 'next/image';
import styles from './feedback.module.css'


const Feedback = () => {
    return (
        <div className={`container ${styles.container_cust}`}>
            <div className="row">
                <div className="col-md-6">
                    <Image style={{ marginTop: "-60px" }} src="/assets/best_app-group.png" className='img-fluid' width={"670"} height={"500"} alt='feature' />
                </div>

                <div className="col-md-6">
                    <h3 className={styles.sub_heading}> The Best Financial Accounting App Ever!</h3>

                    <p>"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam,"</p>
                </div>
            </div>
        </div>
    )
}
export default Feedback;