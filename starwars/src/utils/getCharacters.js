import axios from 'axios'

export const get = axios.create({
  responseType: "json",
  method: 'get'
})

// pages, setPages, currentPage, setCharacters