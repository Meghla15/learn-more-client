
import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


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
                      Upload Materials
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
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            session.status === 'Pending' &&
                            'bg-yellow-100/60 text-yellow-500'
                          } ${
                            session.status === 'In Progress' &&
                            'bg-blue-100/60 text-blue-500'
                          } ${
                            session.status === 'Complete' &&
                            'bg-emerald-100/60 text-emerald-500'
                          } ${
                            session.status === 'Rejected' &&
                            'bg-red-100/60 text-red-500'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              session.status === 'Pending' && 'bg-yellow-500'
                            } ${
                              session.status === 'In Progress' && 'bg-blue-500'
                            } ${session.status === 'Complete' && 'bg-green-500'} ${
                              session.status === 'Complete' && 'bg-green-500'
                            } ${session.status === 'Rejected' && 'bg-red-500'} `}
                          ></span>
                          <h2 className='text-sm font-normal '>{session.status}</h2>
                        </div>
                      </td>
                    {/* <td className='px-4 py-4 text-sm whitespace-nowrap '>
                        <button  onClick={handleRequest}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
</button>
                   
                    </td> */}
                    {/* <button
                            // onClick={() => handleDelete(session._id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none mt-5'
                          >
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>

                          </button> */}
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                       <button disabled={session.status !== "In Progress"} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
</svg>
</button>
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