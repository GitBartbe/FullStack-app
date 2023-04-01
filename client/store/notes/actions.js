import { FTECH_NOTES } from './actionTypes'
import { SET_NOTES } from './mutationTypes'

export default {
  async [FTECH_NOTES]({ commit }) {
    try {
      const data = await this.$notesService.getAllNotes()
      commit(SET_NOTES, data)
    } catch (err) {
      console.log(err)
    }
  },
}
