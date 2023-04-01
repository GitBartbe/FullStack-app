import axiosIstance from '@/common/axios'

export default class NotesService {
  async getAllNotes() {
    const { data } = await axiosIstance.get('./notes')
    return data
  }
}
