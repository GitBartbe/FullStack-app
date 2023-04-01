import { SET_NOTES } from '@/store/notes/mutationTypes'
export default {
  [SET_NOTES](state, payload) {
    state.notes = payload
  },
}
