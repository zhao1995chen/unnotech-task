import axios from 'axios'
import api from '../utils/apipath.js'
import { BASE_URL } from '../utils/config.js'


export const GET_BOOK_LIST = () => {
  return axios.get(`${BASE_URL}${api.BOOKS}`)
}

export const CREATE_BOOK = payload => {
  return axios.post(`${BASE_URL}${api.BOOKS}`, payload)
}

export const GET_BOOK_DETAIL = payload => {
  const { id } = payload
  return axios.get(`${BASE_URL}${api.BOOKS}/${id}`)
}

export const EDIT_BOOK_DETAIL = payload => {
  return axios.patch(`${BASE_URL}${api.BOOKS}/${payload.id}`, payload)
}

export const DELETE_BOOK = payload => {
  const { id } = payload
  return axios.delete(`${BASE_URL}${api.BOOKS}/${id}`)
}

export default {
  GET_BOOK_LIST,
  CREATE_BOOK,
  GET_BOOK_DETAIL,
  EDIT_BOOK_DETAIL,
  DELETE_BOOK
}