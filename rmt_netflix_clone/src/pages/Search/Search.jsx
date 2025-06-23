import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Search.css'

const Search = () => {
  const [searchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const query = searchParams.get('q') || ''

  useEffect(() => {
    if (query) {
      setLoading(true)
      // Mock search results - in a real app, this would be an API call
      setTimeout(() => {
        const mockResults = [
          {
            id: 1,
            title: "The Crown",
            poster_path: "https://images.unsplash.com/photo-1489599162810-1d6d4e2ad2c9?w=300&h=450&fit=crop",
            backdrop_path: "https://images.unsplash.com/photo-1489599162810-1d6d4e2ad2c9?w=500&h=281&fit=crop",
            overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
            genre: "Drama • History",
            rating: 8.7
          },
          {
            id: 2,
            title: "Money Heist",
            poster_path: "https://images.unsplash.com/photo-1534809027769-b00d750a6e0c?w=300&h=450&fit=crop",
            backdrop_path: "https://images.unsplash.com/photo-1534809027769-b00d750a6e0c?w=500&h=281&fit=crop",
            overview: "A criminal mastermind manipulates the police and hostages.",
            genre: "Action • Crime • Drama",
            rating: 8.3
          },
          {
            id: 3,
            title: "Dark",
            poster_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
            backdrop_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=281&fit=crop",
            overview: "A family saga with a supernatural twist set in a German town.",
            genre: "Mystery • Sci-Fi • Thriller",
            rating: 8.8
          }
        ].filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.genre.toLowerCase().includes(query.toLowerCase())
        )
        
        setSearchResults(mockResults)
        setLoading(false)
      }, 500)
    }
  }, [query])

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Results</h1>
        {query && (
          <p className="search-query">
            Showing results for: "<span>{query}</span>"
          </p>
        )}
      </div>

      {loading ? (
        <div className="search-loading">
          <div className="loading-spinner"></div>
          <p>Searching...</p>
        </div>
      ) : (
        <div className="search-results">
          {searchResults.length > 0 ? (
            <div className="results-grid">
              {searchResults.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : query ? (
            <div className="no-results">
              <h2>No results found</h2>
              <p>Try searching for something else</p>
            </div>
          ) : (
            <div className="search-empty">
              <h2>Start searching</h2>
              <p>Use the search bar above to find movies and TV shows</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search