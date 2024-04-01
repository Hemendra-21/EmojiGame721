// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onSelectEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card-container">
      <button type="button" className="emoji-btn" onClick={onSelectEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
