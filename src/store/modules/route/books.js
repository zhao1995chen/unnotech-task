import { getField, updateField } from 'vuex-map-fields'

const initialCreateForm = () => ({
  title: '',
  author: '',
  description: ''
})

const initialState = () => ({
  createForm: initialCreateForm(),
  editForm: {},
  list: [],
  book: {}
})

export const state = initialState()

export const mutations = {
  updateField,
  reset(state) {
    Object.assign(state, initialState())
  },
  resetCreateForm(state) {
    state.createForm = Object.assign({}, initialCreateForm())
  },
  setEditForm(state) {
    state.editForm = Object.assign({}, state.book)
  },
  getListSuccess(state, list) {
    state.list = Object.assign({}, list)
  },
  getDetailSuccess(state, book) {
    state.book = Object.assign({}, book)
  }
}

export const actions = {
  reset({ commit }) {
      commit('reset')
  }
}

export const getters = {
  getField
}