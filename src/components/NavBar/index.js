// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="title-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="app-logo"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score-text">Score: {currentScore}</p>
            <p className="score-text">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
