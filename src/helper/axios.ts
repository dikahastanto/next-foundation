import axios from "axios"
import { toast } from "react-toastify";
const baseURL: string | undefined = process.env.NEXT_PUBLIC_BASEURL
// const baseURL: string = 'http://apikpb.ubl.ac.id:5020/api/v1'
import Cookies from "js-cookie"

const parseResponse = (withToast: boolean = true) => {
  return function (response: any) {
    if (response.status === 200) {
      if (response.data.status) {
        if (withToast) toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    }
    return response
  }
}

const parseError = (error: any) => {
  if (error.response) {

    toast.error('Terjadi kesalahan')
    if (error.response.status === 401) alert('jalankan fungsi logout')

  } else {
    // gagal konek ke server
    toast.error('Gagal koneksi ke server')

  }
  // toast.error('Gagal koneksi ke server')
  return Promise.reject(error)
}


const createAxios  = (withToast: boolean = true) => {
  const api = axios.create({
    baseURL: baseURL,
  })
  api.interceptors.request.use(createToken)
  if (withToast) {
    api.interceptors.response.use(parseResponse(), parseError)
  } else {
    api.interceptors.response.use(parseResponse(false), parseError)
  }
  
  return api
}

const createToken = (config: any) => {
  const userCookies = Cookies.get('user')
  const user = userCookies ? JSON.parse(userCookies) : null
  if (user) {
    config.headers['access-token'] = user.access_token
    config.headers.username = user.username
  }
  return config
}

const api = createAxios(false)
const apiToast = createAxios(true)

export {
  api,
  apiToast
}