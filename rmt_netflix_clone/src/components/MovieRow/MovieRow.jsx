import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MovieCard from '../MovieCard/MovieCard'
import './MovieRow.css'

const MovieRow = ({ title, category }) => {
  const [movies, setMovies] = useState([])
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const rowRef = useRef(null)

  useEffect(() => {
    // Mock movie data - in a real app, this would come from an API
    const mockMovies = [
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
      },
      {
        id: 4,
        title: "The Witcher",
        poster_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
        backdrop_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=281&fit=crop",
        overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place.",
        genre: "Action • Adventure • Fantasy",
        rating: 8.2
      },
      {
        id: 5,
        title: "Ozark",
        poster_path: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop",
        backdrop_path: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=281&fit=crop",
        overview: "A financial advisor drags his family to the Missouri Ozarks.",
        genre: "Crime • Drama • Thriller",
        rating: 8.4
      },
      {
        id: 6,
        title: "Breaking Bad",
        poster_path: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
        backdrop_path: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=281&fit=crop",
        overview: "A high school chemistry teacher turned methamphetamine producer.",
        genre: "Crime • Drama • Thriller",
        rating: 9.5
      }
    ]
    
    setMovies(mockMovies)
  }, [category])

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        {showLeftArrow && (
          <button 
            className="row-nav left" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
        )}
        
        <div 
          className="movies-container" 
          ref={rowRef}
          onScroll={handleScroll}
        >
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            className="row-nav right" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default MovieRow