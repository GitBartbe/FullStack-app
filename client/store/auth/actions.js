import { GET_TOKEN, LOG_OUT } from './actionTypes'
// eslint-disable-next-line no-unused-vars
import { SET_TOKEN, CLEAR_TOKEN } from './mutationTypes'

export default {
  async [GET_TOKEN]({ commit }, payload) {
    try {
      const { accessToken } = await this.$authService.getToken(payload)
      this.$storage.setCookie('accessToken', accessToken)
      localStorage.setItem('accesToken', accessToken)
      commit(SET_TOKEN, accessToken)
    } catch (err) {
      console.log(err)
    }
  },
  async [LOG_OUT]({ commit }) {
    try {
      await this.$authService.logOut()
      this.$storage.removeCookie('accessToken')
      commit(CLEAR_TOKEN)
    } catch (err) {
      console.log(err)
    }
  },
}
