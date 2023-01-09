import { createStore } from 'vuex'
import modules from './modules'

console.log(modules)

const store = createStore({
  modules
})

if (import.meta.hot) {
  import.meta.hot.accept(['./modules'], () => {
    const modules = import.meta.globEager('./modules')
    store.hotUpdate({
      modules
    })
  })
}

export default store