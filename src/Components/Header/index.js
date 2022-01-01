import './index.css'

const Header = props => {
  const {scoreDetails} = props
  const {score} = scoreDetails
  console.log(score)

  return (
    <div className="header-container">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
      />
      <div className="right-side">
        <p className="pera-score">Score:{score}</p>
        <div className="timer-container">
          <img
            className="timer"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p>60 sec</p>
        </div>
      </div>
    </div>
  )
}
export default Header
