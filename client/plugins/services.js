import NotesService from '../common/services/notes'
import AuthService from '../common/services/auth'

export default (_, inject) => {
  inject('notesService', new NotesService())
  inject('authService', new AuthService())
}
