import { Link } from 'react-router-dom';

const StudySectionCard = ({studySession}) => {
const {_id, sessionTitle, sessionDescription} = studySession || {}
    return (
        <div>
            <Link to={`/detailsPage/${_id}`} className="block  max-w-sm p-6 bg-white border border-fuchsia-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-stretch h-full">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sessionTitle}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">{sessionDescription}</p>
<button className='btn mt-1 w-full bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white z-50 '>Optional Button</button>
</Link>


        </div>
    );
};

export default StudySectionCard;