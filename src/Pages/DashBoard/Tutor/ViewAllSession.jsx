
import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";


const ViewAllSession = () => {
    const {user} = UseAuth()
    const [sessions , setSessions] = useState()

    useEffect(() => {
        getData()
       }, [user])

       const getData = async () => {
        const { data } = await axios ( `${import.meta.env.VITE_API_URL}/viewAllSession/${user?.email}`)
        setSessions(data)
        // console.log(data)
      }

      const handleRequest = e =>{
        e.preventDefault()
        Swal.fire({
            title: "Sending",
            text: "Request Send Successfully",
            icon: "success"
          });
      }
        

    
    return (
        <div>
            <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-3xl font-medium text-gray-800 '>Total Study Session</h2>

        <span className='px-4 py-2 text-xs font-semibold text-white bg-fuchsia-400 rounded-full '>
        {sessions?.length}
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
                  sessions?.map((session) =>( 
                  <tr key={session._id}>
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                     {session?.sessionTitle}
                    </td>
                   
                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                      <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                        <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                        <h2 className='text-sm font-normal '>pending</h2>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <button onClick={handleRequest}><svg
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
                          </svg></button>
                   
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                       <button ><Link to='/dashboard/uploadMaterials'><FaUpload></FaUpload></Link></button>
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

export default ViewAllSession;