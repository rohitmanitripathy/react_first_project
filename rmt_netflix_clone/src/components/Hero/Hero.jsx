import { useState, useEffect } from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [heroData, setHeroData] = useState(null)

  useEffect(() => {
    // Mock hero data - in a real app, this would come from an API
    const mockHeroData = {
      id: 1,
      title: "Stranger Things",
      overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      backdrop_path: "https://images.unsplash.com/photo-1489599162810-1d6d4e2ad2c9?w=1920&h=1080&fit=crop",
      genre: "Sci-Fi • Drama • Thriller",
      rating: "TV-14",
      year: "2016"
    }
    
    setHeroData(mockHeroData)
  }, [])

  if (!heroData) return <div className="hero-loading"></div>

  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src={heroData.backdrop_path} 
          alt={heroData.title}
          className="hero-image"
        />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-info">
          <h1 className="hero-title">{heroData.title}</h1>
          <div className="hero-meta">
            <span className="hero-rating">{heroData.rating}</span>
            <span className="hero-year">{heroData.year}</span>
            <span className="hero-genre">{heroData.genre}</span>
          </div>
          <p className="hero-overview">{heroData.overview}</p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary hero-btn">
              <FaPlay /> Play
            </button>
            <button className="btn btn-secondary hero-btn">
              <FaInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero