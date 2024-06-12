import styles from './home.module.css'
import { MdArrowRightAlt } from "react-icons/md";
import { GoPlay } from "react-icons/go";
import Image from 'next/image';
const Home = () => {
    return (
        <section className="mt-5 container-fluid">
            <div className='row'>
                <div className={`col-md-6 mt-5 ${styles.containt_res}`} style={{ paddingLeft: "6rem" }}>

                    <div className="row">
                        <div className="col">
                            <div className='position-relative'>
                                <Image className="position-absolute" style={{ right: 50, top: "-100px", zIndex: -1 }} src={'/assets/head_blur.png'} width={350} height={350} alt='blur' />
                                <Image className="position-absolute" style={{ left: "-50px", top: "-50px", zIndex: -1 }} src={'/assets/star.png'} width={35} height={35} alt='star' />
                                <h1 className={styles.main_containt}>Make The Best</h1>
                                <h1 className={styles.main_containt}>Financial Decisions</h1>
                            </div>
                            <p className={`mt-3 text-muted ${styles.fin_discrip}`}>Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Alique <br /> Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.</p>
                            <div style={{ display: "flex", columnGap: "10px" }}>
                                <button type="button" className="btn btn-dark btn-lg" style={{ backgroundColor: "#000" }}>GetStarted <MdArrowRightAlt /></button>
                                <button type="button" className="btn"><GoPlay className={`${styles.play_icon}`} /> Watch Video</button>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col g-col-6">
                            <Image src="/assets/ribbun.png" className='img-fluid' width={569} height={350} alt='ribbun' />
                        </div>
                    </div>

                </div>


                <div className="col-md-6">
                    <Image src="/assets/mobile-group.png" className={`img-fluid ${styles.custom_resp}`} style={{ marginTop: "-80px" }} width={721} height={954} alt='mobile-group' />
                </div>
            </div>
        </section>
    )
}
export default Home;