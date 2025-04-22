
import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSerarch =  useRef(search)


  const getMovies = async () => {

    if (search === previousSerarch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSerarch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = useMemo (() => {
    return sort 
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])


  return {movies: sortedMovies, loading, getMovies}
}