import Hero from '../../components/Hero/Hero'
import MovieRow from '../../components/MovieRow/MovieRow'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      <div className="content-rows">
        <MovieRow title="Trending Now" category="trending" />
        <MovieRow title="Popular on Netflix" category="popular" />
        <MovieRow title="Netflix Originals" category="originals" />
        <MovieRow title="Action Movies" category="action" />
        <MovieRow title="Comedy Movies" category="comedy" />
        <MovieRow title="Horror Movies" category="horror" />
        <MovieRow title="Documentaries" category="documentaries" />
        <MovieRow title="International Movies" category="international" />
      </div>
    </div>
  )
}

export default Home