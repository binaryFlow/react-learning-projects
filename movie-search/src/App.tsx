import { useState } from 'react'
import './App.css'
import MovieFrame from './components/MovieFrame'
import Search from './components/Search'
import type { MovieResult } from './types'


function App() {
  const [results, setResults] = useState<MovieResult[]>([])
  return (
    <div className='w-full min-h-screen bg-gray-200 text-center'>
      <p className='text-3xl font-bold'>Search for a movie from IMDb</p>
      <Search setResults={setResults}/>
      <MovieFrame results={results}/>
    </div>
  )
}

export default App
