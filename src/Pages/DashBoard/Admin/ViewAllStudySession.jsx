import axios from 'axios';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import ViewAllSessionForm from './ViewAllSessionForm';


const ViewAllStudySession = () => {

    const studySections = useLoaderData()
    console.log(studySections)
    const [control, setControl] = useState(false);

    // const handleStatusUpdate = async(id)=>{
    //   Swal.fire({
    //     title: "Status Update Successfully",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });
    // }
    
    

    const handleDelete = async (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(
              `${import.meta.env.VITE_API_URL}/studySession/${id}`,
            )
            const data = response.data;
    
            if (data.deletedCount > 0) {
              setControl(!control)
              Swal.fire({
                title: 'Deleted!',
                text: 'Study session has been deleted.',
                icon: 'success',
              })
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Failed to delete the note.',
                icon: 'error',
              })
            }
          //  getData()
          } catch (err) {
            console.error(err)
          }
        }
      })
    }
    return (
        <div>
            <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-3xl font-medium text-gray-800 '>Total Study Session</h2>

        <span className='px-4 py-2 text-xs font-semibold text-white bg-fuchsia-400 rounded-full '>
        {studySections.length}
        </span>
      </div>
      

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                   
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                  studySections.map((studySession) =>( 
                  <tr key={studySections._id}>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                     {studySession.sessionTitle}
                    </td>
                   
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            studySession.status === 'Pending' &&
                            'bg-yellow-100/60 text-yellow-500'
                          } ${
                            studySession.status === 'In Progress' &&
                            'bg-blue-100/60 text-blue-500'
                          } ${
                            studySession.status === 'Complete' &&
                            'bg-emerald-100/60 text-emerald-500'
                          } ${
                            studySession.status === 'Rejected' &&
                            'bg-red-100/60 text-red-500'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              studySession.status === 'Pending' && 'bg-yellow-500'
                            } ${
                              studySession.status === 'In Progress' && 'bg-blue-500'
                            } ${studySession.status === 'Complete' && 'bg-green-500'} ${
                              studySession.status === 'Complete' && 'bg-green-500'
                            } ${studySession.status === 'Rejected' && 'bg-red-500'} `}
                          ></span>
                          <h2 className='text-sm font-normal '>{studySession.status}</h2>
                        </div>
                      </td>
                      
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          {/* Accept Button: In Progress */}
                          <button
                            // onClick={handleStatusUpdate}
                        
                            className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 12.75 6 6 9-13.5'
                              />
                            </svg>
                          </button>
                          {/* Reject Button */}
                          <button
                            onClick={handleDelete}
                            disabled={studySession.status === 'Complete'}
                            className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                  </tr>))
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ViewAllStudySession;