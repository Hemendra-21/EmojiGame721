import {Component} from 'react'
import Navbar from '../NavBar/index'
import './index.css'
import WinOrLossCard from '../WinOrLoseCard/index'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], isGameInProgress: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLossCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({isGameInProgress: false, topScore: newTopScore})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const clickedEmojisCount = clickedEmojisList.length
    const isEmojiPresent = clickedEmojisList.includes(id)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisCount)
    } else {
      if (emojisList.length - 1 === clickedEmojisCount) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            emojiDetails={emojiObject}
            key={emojiObject.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state

    return (
      <div className="app-container">
        <Navbar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
