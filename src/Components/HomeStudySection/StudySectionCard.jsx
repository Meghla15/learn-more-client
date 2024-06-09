import { Link } from 'react-router-dom';
import { format } from 'date-fns';
const StudySectionCard = ({studySession}) => {
const {_id, sessionTitle, sessionLongDescription, registrationEndDate} = studySession || {}
 
   const today = new Date()
   const formattedDate = format(today, 'yyyy-MM-dd');

   const isOngoing = formattedDate <= registrationEndDate;
    return (
        <div className='border rounded-xl space-y-3 p-4'>
            <Link to={`/detailsPage/${_id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sessionTitle}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{sessionLongDescription}</p>
      </Link>
      {isOngoing ?   <Link to={`/detailsPage/${_id}`}><button  className="btn mt-1 w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white z-50">Ongoing</button>
      
      </Link> : <button  className="btn mt-1 w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white z-50">Closed</button>}
     


        </div>
    );
};

export default StudySectionCard;