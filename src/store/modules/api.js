import ApiService from '../../services/api.js'

export const actions = {
  GET_BOOK_LIST({ commit }, payload = {}) {
    return ApiService.GET_BOOK_LIST(payload).then(({ data }) =>{
      commit('route/books/getListSuccess', data, { root: true })
    })
  },
  CREATE_BOOK({ commit }, payload = {}) {
    return ApiService.CREATE_BOOK(payload)
  },
  GET_BOOK_DETAIL({ commit }, payload = {}) {
    return ApiService.GET_BOOK_DETAIL(payload).then(({ data }) =>{
      commit('route/books/getDetailSuccess', data, { root: true })
    })
  },
  EDIT_BOOK_DETAIL({ commit }, payload = {}) {
    return ApiService.EDIT_BOOK_DETAIL(payload)
  },
  DELETE_BOOK({ commit }, payload = {}) {
    return ApiService.DELETE_BOOK(payload)
  },
}