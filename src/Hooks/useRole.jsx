import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import useAxiosSecure from "./useAxiosSecure"

const useRole = () => {
  const { user, loading } = UseAuth()
  const axiosSecure = useAxiosSecure()
   console.log(user)
  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`)
      console.log(data)
      return data.role
    },
  })
  console.log({role})

  return [role, isLoading]
}

export default useRole