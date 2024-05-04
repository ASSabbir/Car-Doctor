import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Service/Services";


const Home = () => {
    return (
        <div className="space-y-[135px]">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;