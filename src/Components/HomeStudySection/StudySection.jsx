import { Link, useLoaderData } from "react-router-dom";
import StudySectionCard from "./StudySectionCard";



const StudySection = () => {
    const studySections = useLoaderData()
    console.log(studySections)
    return (
        <div >
            <h1 className="text-4xl text-center font-bold">Study Session</h1>
         <div className='container  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 '>
         {
            studySections.map((studySession) =>(   <StudySectionCard key={studySections._id}
            studySession={studySession}></StudySectionCard>))
          }
         </div>
         <div className='mt-10 text-center'>
        <Link > <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-fuchsia-600 border-2 border-fuchsia-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">See All</span>
</button></Link>
         </div>

        </div>
    );
};

export default StudySection;