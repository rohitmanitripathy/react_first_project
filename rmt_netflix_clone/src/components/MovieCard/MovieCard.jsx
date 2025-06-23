import { useState } from 'react'
import { FaPlay, FaPlus, FaThumbsUp, FaChevronDown } from 'react-icons/fa'
import MovieModal from '../MovieModal/MovieModal'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCardClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div 
        className="movie-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="card-image-container">
          <img 
            src={movie.poster_path} 
            alt={movie.title}
            className="card-image"
          />
          
          {isHovered && (
            <div className="card-overlay">
              <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                <div className="card-rating">
                  <span className="rating-score">★ {movie.rating}</span>
                </div>
                <p className="card-genre">{movie.genre}</p>
                <div className="card-actions">
                  <button className="action-btn primary" title="Play">
                    <FaPlay />
                  </button>
                  <button className="action-btn secondary" title="Add to My List">
                    <FaPlus />
                  </button>
                  <button className="action-btn secondary" title="Like">
                    <FaThumbsUp />
                  </button>
                  <button className="action-btn secondary more-info" title="More Info">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <MovieModal 
          movie={movie} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  )
}

export default MovieCard