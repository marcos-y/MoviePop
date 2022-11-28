import axios from 'axios'

export const api = axios.create({
  baseURL:'https://api.tvmaze.com/search/shows?q=star%20wars'
})

export const getMovies = async () => {
  const response = await api.get('/movies')
  return response.data
}