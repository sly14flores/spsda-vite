import useStorage from './useStorage'

export default function useAuth() {

  const { token } = useStorage().get()

  const isAuthenticated = token === null ? false : true
  const user = {}

  return {
    isAuthenticated,
    user
  }

}