
import UseAuth from '../../../Hooks/UseAuth'
import { useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import UpdateUserModal from '../../../Components/UpdateUserModal'
import Swal from 'sweetalert2'

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = UseAuth()
  // console.log(user)

  const [isOpen, setIsOpen] = useState(false)
  const axiosSecure = useAxiosSecure()
  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      )
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
    Swal.fire({
        title: "Success",
        text: "User Role Update Successfully",
        icon: "success"
      });
      setIsOpen(false)
    },
  })

  //   modal handler
  const modalHandler = async selected => {
    if (loggedInUser.email === user?.email) {
      return setIsOpen(false)
    }

    const userRole = {
      role: selected,
      status: 'Verified',
    }

    try {
      await mutateAsync(userRole)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  )
}



export default UserDataRow