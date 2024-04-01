// Write your code here.
import './index.css'

const lostImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {isWon, score, onPlayAgain} = props

  const imageUrl = isWon ? wonImage : lostImage
  const scoreLabelText = isWon ? 'Best Score' : 'Score'
  const winStatusText = isWon ? 'You Won' : 'You Lose'

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{winStatusText}</h1>
        <p className="current-score-label">{scoreLabelText}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
