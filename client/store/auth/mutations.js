import { SET_TOKEN, CLEAR_TOKEN } from './mutationTypes'

export default {
  [SET_TOKEN](state, payload) {
    state.token = payload
  },
  [CLEAR_TOKEN](state) {
    state.token = null
  },
}
