import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const studySession = useLoaderData();
    // console.log(studySession)
    const {_id, averageRating, classEndDate, classStartTime, registrationEndDate, registrationStartDate, registrationFee, reviews, sessionDuration, sessionTitle, tutorName, tutorImg, sessionLongDescription} = studySession || {};
    
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize  dark:text-white">Session Title : {sessionTitle}</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={tutorImg || "https://t4.ftcdn.net/jpg/05/21/94/85/360_F_521948517_mS2CABoRkmHIgrUwlxLQ1WNiCWn9SCz2.jpg"}alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-xl text-fuchsia-500 font-semibold uppercase">Tutor Name : {tutorName}</p>

                <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                   Registration : <span className="font-medium">{registrationStartDate}</span> to {registrationEndDate}
                </p>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  {sessionLongDescription}
                </p>

                <p className="text-xm font-semibold mt-2">Class Time : {classStartTime} to {classEndDate}</p>
                <p className="text-xm font-semibold mt-2">Session Duration : {sessionDuration}</p>
                <p className="text-xm font-semibold mt-2">Registration Fee : {registrationFee}</p>
                <ul className='list-disc mt-2 text-xm font-semibold '> Reviews :
              {studySession.reviews.map((review, index) => (
               <li className='text-xm opacity-70' key={index}> {review}</li>
                ))}
              </ul>
           <div className="flex items-center">
           <p className="text-xm font-semibold mt-1">Average Rating : {averageRating} 
</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="orange" className="size-4">
  <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
</svg>

           </div>
           
             <Link to='/paymentPage'> <button className="btn w-1/2 mt-1 bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white">Book Now</button></Link>
                
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default DetailsPage;