import Hero from './hero';
import Advantages from './advantages';
import Features from './features';
import Customizable from './customizable';
import Testimonal from './testimonal';
import Faq from './faq';

const LandingPage = () => {
    return (
        <>
            <main>
                <Hero />
                <Features />
                <Advantages />
                <Customizable />
                <Testimonal />
                <Faq />
            </main>
        </>
    )
}
export default LandingPage;