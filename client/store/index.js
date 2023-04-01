import { Store } from 'vuex'
import notes from '@/store/notes'
import auth from '@/store/auth'

const createStore = () =>
  new Store({
    modules: {
      notes,
      auth,
    },
  })

export default createStore
