import Image from "next/image";
import styles from "./testimonal.module.css"
const Testimonal = () => {
    return (
        <div className={`container position-relative ${styles.container_cust}`}>
            <div className={styles.heading}>
                <div>
                    <Image className="position-absolute" style={{ right: "110px", top: "-50px", zIndex: -1 }} src={'/assets/star.png'} width={50} height={50} alt='star' />
                    <h5 className="text-center">TESTIMONIAL</h5>
                    <h3 className={`section_heading text-center ${styles.resp_heading}`}>What Our Users </h3>
                    <h3 className={`section_heading text-center ${styles.resp_heading}`}>Say About Us?</h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-7">
                    <Image src="/assets/best_app-group.png" className='img-fluid animate_zoom' width={"670"} height={"500"} alt='user group' />
                </div>
                <div className="col-md-5">
                    <div className="mt-5" >
                        <h3 className={styles.sub_heading}> The Best Financial Accounting App Ever!</h3>
                        <p className="m-0">"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultrices. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam,"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonal;