import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";


const ViewAllUsers = () => {
    const [search, setSearch] = useState();
    const [user,setUser]=useState([])
    const axiosSecure = useAxiosSecure();
    const {data : users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
            
        }
        
    })
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) =>{
            if(result.isConfirmed){
                axiosSecure.delete(`/users/${user._id}`)
                .then(res =>{
                    if (res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        })
    }

    const handleSearch= e =>{
        e.preventDefault()
        const text = e.target.search.value
        const getData =async () =>{
                      const  {data} = await axios(`${import.meta.env.VITE_API_URL}/search?search=${text}`)
                      setUser(data)
                      console.log(data)
                  }
                  getData()
        setSearch(text)
    }
    console.log(search)
   
    return (
        <div>
            <div className="flex justify-around my-4">
                <h2 className="text-3xl font-bold">All Users :{users.length} </h2>

                <form className="flex item-center justify-center gap-1" onSubmit={handleSearch}> 
        <input type="text" placeholder="Search Here" name="search" className="border p-2 rounded-xl"/>
        <input type="submit" value='Search' className="btn bg-fuchsia-600 text-white rounded-xl"/>
       </form>

            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-fuchsia-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
       
        </div>
    );
};

export default ViewAllUsers;