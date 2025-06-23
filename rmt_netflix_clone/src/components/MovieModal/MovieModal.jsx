import { useEffect } from 'react'
import { FaPlay, FaPlus, FaThumbsUp, FaTimes } from 'react-icons/fa'
import './MovieModal.css'

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-hero">
          <img 
            src={movie.backdrop_path} 
            alt={movie.title}
            className="modal-backdrop-image"
          />
          <div className="modal-gradient"></div>
          
          <div className="modal-hero-content">
            <h1 className="modal-title">{movie.title}</h1>
            <div className="modal-actions">
              <button className="btn btn-primary modal-btn">
                <FaPlay /> Play
              </button>
              <button className="modal-icon-btn">
                <FaPlus />
              </button>
              <button className="modal-icon-btn">
                <FaThumbsUp />
              </button>
            </div>
          </div>
        </div>
        
        <div className="modal-details">
          <div className="modal-main">
            <div className="modal-info">
              <div className="modal-meta">
                <span className="modal-rating">★ {movie.rating}</span>
                <span className="modal-genre">{movie.genre}</span>
              </div>
              <p className="modal-overview">{movie.overview}</p>
            </div>
          </div>
          
          <div className="modal-sidebar">
            <div className="modal-cast">
              <h3>Cast:</h3>
              <p>Matthew McConaughey, Jessica Chastain, Anne Hathaway</p>
            </div>
            <div className="modal-genres">
              <h3>Genres:</h3>
              <p>{movie.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal