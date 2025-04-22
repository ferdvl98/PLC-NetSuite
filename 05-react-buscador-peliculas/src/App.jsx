import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function useSearch () {
  const [search, updadeSearch] = useState('')
  const [error, setError] = useState(null)
  const inFirstInput = useRef(true)

  useEffect(() => {

    if (inFirstInput.current) {
      inFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar la pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar la pelicula con solo numeros')
      return
    }

    if (search.length < 3) {
      setError('No se puede buscar la pelicula con menos de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, error, updadeSearch}
}

function App() {
  const [sort, setSort ] = useState(false)
  const { search, error, updadeSearch } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handelChange = (event) => {
    updadeSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={ handelChange } value={ search } name='query' placeholder='Harry Potter, The hunger Games'/>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
