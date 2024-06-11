

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import UserDataRow from './UserDataRow'
import { useState } from 'react';
const ViewAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users',search],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`,{params: { search }})
      return data
    },
  })

//   console.log(users)
  if (isLoading) return 'Loading.........'

   const handleSearch = e=>{
    e.preventDefault()
    const text = e.target.search.value ;
    console.log(text)
    
   } 
  return (
    <>
      <div>
      <div className='flex container justify-evenly'>
      <h2 className="text-3xl font-bold">All Users :{users.length} </h2>
      <form className="flex item-center justify-center gap-1" onSubmit={handleSearch}> 
        <input type="text" placeholder="Search Here" name="search" className="border p-2 rounded-xl"/>
        <input type="submit" value='Search' className="btn bg-fuchsia-600 text-white rounded-xl"/>
       </form>
      </div>
      <div className='container mx-auto px-4 sm:px-8'>
     
      
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ViewAllUsers