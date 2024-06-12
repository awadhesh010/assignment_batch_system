import Image from "next/image";
import styles from "./testimonal.module.css"
const Testimonal = () => {
    return (
        <div className={`container position-relative ${styles.container_cust}`}>
            <div className={styles.heading}>
                <div>
                <Image className="position-absolute" style={{ right: "110px", top: "-50px", zIndex: -1 }} src={'/assets/star.png'} width={50} height={50} alt='star' />
                    <h5 className="text-center">TESTIMONIAL</h5>
                    <h3  className="section_heading">What Our Users </h3>
                    <h3  className={`text-center section_heading ${styles.heading_cust}`}>Say About Us?</h3>
                </div>
            </div>
        </div>
    )
}
export default Testimonal;