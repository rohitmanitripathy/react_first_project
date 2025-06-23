import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
          </Link>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tv-shows" className="nav-link">TV Shows</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/new" className="nav-link">New & Popular</Link>
            <Link to="/my-list" className="nav-link">My List</Link>
          </nav>
        </div>
        
        <div className="header-right">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>
          
          <FaBell className="icon" />
          
          <div className="profile-menu">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
              alt="Profile" 
              className="profile-avatar"
            />
            <FaCaretDown className="dropdown-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header