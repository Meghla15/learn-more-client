import { Link, useLoaderData } from "react-router-dom";
import StudySectionCard from "./StudySectionCard";
import {  useState } from "react";



const StudySection = () => {
    const studySections = useLoaderData()
    // console.log(studySections)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage]= useState(6)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost= indexOfLastPost - postPerPage
    const currentPost = studySections.slice(indexOfFirstPost, indexOfLastPost)
    
    return (
        <div >
            <h1 className="text-4xl mt-4 text-center font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient">Study Session</h1>
         <div className='container  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 '>
         {
            studySections.map((studySession) =>(   <StudySectionCard key={studySections._id}
            studySession={studySession}></StudySectionCard>))
          }
         </div>
       

        </div>
    );
};

export default StudySection;