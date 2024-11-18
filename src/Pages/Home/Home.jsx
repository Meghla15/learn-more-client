import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import StudySection from "../../Components/HomeStudySection/StudySection";
import TutorSection from "../../Components/TutorSection/TutorSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Learn More || Home</title>
      </Helmet>
      <Banner></Banner>
      <StudySection></StudySection>
      <TutorSection></TutorSection>
    </div>
  );
};

export default Home;
