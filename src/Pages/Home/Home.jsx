import Banner from "../../Components/Banner/Banner";
import StudySection from "../../Components/HomeStudySection/StudySection";
import TutorSection from "../../Components/TutorSection/TutorSection";


const Home = () => {
    return (
        <div className="space-y-10 container mx-auto">
            <Banner></Banner>
            <StudySection></StudySection>
            <TutorSection></TutorSection>
        </div>
    );
};

export default Home;