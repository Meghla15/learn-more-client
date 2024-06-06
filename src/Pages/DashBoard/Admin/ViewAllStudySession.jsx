import { useLoaderData } from 'react-router-dom';

const ViewAllStudySession = () => {
    const studySections = useLoaderData()
    console.log(studySections)
    return (
        <div>
            <h1 className='font-semibold text-3xl'>Total Study Session : {studySections.length}</h1>
        </div>
    );
};

export default ViewAllStudySession;