import request from "@/spsda/library/request";

// export const signUp = (payload) => {
//   const url = '/users/signup'
//   return request({url, payload: { ...payload }, method: 'POST', shouldAuth: false})
// }

const loginApi = (account) => {
  const url = `/v1/login`
  return request({url, payload: {...account}, method: 'POST', shouldAuth: false})
}

const logoutApi = () => {
  const url = '/v1/logout'
  return request({url, method: 'POST'})
}

export {
  loginApi,
  logoutApi
}