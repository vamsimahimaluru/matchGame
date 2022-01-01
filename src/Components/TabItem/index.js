import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeButton = isActive ? 'active-tab-btn' : ''

  return (
    <ul>
      <li className="tab-item-container">
        <button
          type="button"
          className={`tab-btn ${activeButton}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    </ul>
  )
}
export default TabItem
