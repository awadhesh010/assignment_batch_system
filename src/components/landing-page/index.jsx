import Home from './home/Home';
import Advantages from './advantages/Advantages';
import Features from './features/Features';
import Customizable from './customizable/Customizable';
import Testimonal from './testimonal/Testimonal';
import Faq from './faq/Faq';
import Feedback from './feedback/Feedback';

const LandingPage = () => {
    return (
        <>
            <Home/>
            <Features />
            <Advantages />
            <Customizable />
            <Testimonal />
            <Feedback/>
            <Faq />
        </>
    )
}
export default LandingPage;