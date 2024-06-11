import { Navigate } from "react-router-dom"
import useRole from "../../Hooks/useRole"

const TutorRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return 'Loading.........'
  if (role === 'host') return children
  return <Navigate to='/dashboard' />
}

export default TutorRoute

