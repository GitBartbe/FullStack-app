import axiosIstance from '@/common/axios'

export default class AuthService {
  async getToken(payload) {
    const { data } = await axiosIstance.post('/auth', payload)
    return data
  }

  async logOut() {
    const { data } = await axiosIstance.post('/auth/logout')
    return data
  }

  async refresh() {
    const data = await axiosIstance.get('/auth/refresh')
    return data
  }
}
