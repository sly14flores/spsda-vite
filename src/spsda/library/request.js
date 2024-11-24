import axios from "axios";
import { apiUrl } from "@/spsda/constants/url";

const request = ({
  url,
  payload,
  method = "GET",
  shouldAuth = true,
  shouldEncode = false,
  baseURL = apiUrl,
  reponseTypeBlob = false,
  withCredentials = false,
}) => {

    const appKey = 'spsda'
    const storage = localStorage.getItem(appKey)
    const app = JSON.parse(storage)
    
    const accessToken = app?.token | '';
    const headerAuthBearer = shouldAuth
        ? { Authorization: `Bearer ${accessToken}` }
        : null;
    const headerTypeEncoded = shouldEncode
        ? { "Content-Type": "multipart/form-data" }
        : null;

    const blobType = reponseTypeBlob ? { responseType: "blob" } : null;

    const body =
        method.toUpperCase() === "GET"
        ? { params: { ...payload } }
        : { data: shouldEncode ? payload : { ...payload } };

    return axios.request({
        baseURL,
        url,
        method,
        headers: {
        "Content-Type": "application/json",
        ...headerTypeEncoded,
        ...headerAuthBearer,
        ...blobType,
        },
        ...body,
        withCredentials,
    });
};

export default request;

/**
 * Validation sequence
 * 401 for invalid token e.g., expired or non-passport token
 */
axios.interceptors.response.use(
    response => response,
    // eslint-disable-next-line func-names
    async function(error) {
        if (error?.response?.status === 401) {
          const url = error?.response?.config.url
          const sUrl = url.split('/')
          const route = sUrl[sUrl.length-1]
          if (route!=='login') window.open('/login','_self')
        }
        if (error?.response?.status === 403) {
          // dispatch(notifyNotAuthorized({show: true, message: error?.response?.data?.message}))
        }
        return Promise.reject(error);
    },
);