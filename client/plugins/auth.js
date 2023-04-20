import axiosInstance from '@/common/axios'

export default ({ req, response }) => {
  const cookies = process.server ? req.headers.cookie : document.cookie

  // eslint-disable-next-line no-unused-vars
  const accessToken =
    cookies &&
    cookies
      .split('; ')
      .find((cookie) => cookie.startsWith('accessToken'))
      .split('=')[1]

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config

      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true
        return axiosInstance
          .get('http://localhost:3500/auth/refresh')
          .then((res) => {
            const accessToken = res.data.accessToken
            document.cookie = `accessToken=${accessToken}`
            originalRequest.headers.Authorization = `Bearer ${accessToken}`
            return axiosInstance(originalRequest)
          })
      }
    }
  )
}

//   axiosIstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       const originalRequest = error.config
//       console.log(originalRequest)
//       if (error.response.status === 403 && !originalRequest._retry) {
//         originalRequest._retry = true
//         return axiosIstance
//           .get('http://localhost:3500/auth/refresh')
//           .then(() => {
//             originalRequest.headers.Authorization = `Bearer ${accessToken}`
//             return axiosIstance(originalRequest)
//           })
//       }

//       return Promise.reject(error)
//     }
//   )
// }

// export default ({ req, res }) => {
//   axiosIstance.interceptors.request((config) => {
//     const cookies = process.server ? req.headers.cookie : document.cookie

//     const accessToken =
//       cookies &&
//       cookies
//         .split('; ')
//         .find((cookie) => cookie.startsWith('accessToken'))
//         .split('=')[1]
//     config.headers.authorization = `Bearer ${accessToken}`
//     config.withCredentials = true
//   }, ()=> (console.error();))
// }

// axiosIstance.onError((error) => {
//   const status = error.response.status
//   if (status === 403) {
//     const originalRequest = error.config
//     if (!originalRequest._retry) {
//       originalRequest._retry = true
//       return axiosIstance
//         .get('http://localhost:3500/auth/refresh')
//         .then((res) => {
//           const accessToken = res.data.accessToken
//           originalRequest.headers.authorization = `Bearer ${accessToken}`
//           return axiosIstance(originalRequest)
//         })
//     }
//   }
