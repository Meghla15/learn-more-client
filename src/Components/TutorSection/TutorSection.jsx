import { useLoaderData } from "react-router-dom";
import TutorSectionCard from "./TutorSectionCard";


const TutorSection = () => {
	const studySections = useLoaderData();
	console.log(studySections)
    return (
        <div>
            <h1 className='text-4xl mt-4 text-center font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient'>Tutor Section</h1>
			<div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 ">
                
			{
            studySections.map((studySession) =>(   <TutorSectionCard key={studySections._id}
            studySession={studySession}></TutorSectionCard>))
          }
			</div>
			
            
        </div>
    );
};

export default TutorSection;