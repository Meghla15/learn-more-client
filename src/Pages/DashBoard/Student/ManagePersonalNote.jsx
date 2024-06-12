import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";


const ManagePersonalNote = () => {
  const{user} = UseAuth()
  // const[storeNotes, setStoreNote] = useState()
  const storeNotes = useLoaderData()
  // console.log(storeNotes)
  const [control, setControl] = useState(false);
  
  // useEffect(()=>{
  //   getData()
  // },[user])
  
  // const getData = async () => {
  //   const { data } = await axios ( `${import.meta.env.VITE_API_URL}/storeNote/${user?.email}`)
  //   setStoreNote(data)
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
            `${import.meta.env.VITE_API_URL}/storeNote/${id}`,
          )
          const data = response.data;
  
          if (data.deletedCount > 0) {
            setControl(!control)
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Purchase has been deleted.',
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
        <div className='w-full'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient font-lato mb-6'>Manage Your Personal Note Here : {storeNotes.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        storeNotes.map((note, index) =>(
          <tr key={note._id}>
        <th>{index +1}</th>
        <td>{note.title}</td>
        <td><div><Link to={`/dashboard/update/${note._id}`}><button className='btn btn-secondary'>Update</button></Link></div></td>
        <td><button onClick={()=>handleDelete(note._id)} className='btn btn-primary'>Delete</button></td>
      </tr>
        ))
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManagePersonalNote;