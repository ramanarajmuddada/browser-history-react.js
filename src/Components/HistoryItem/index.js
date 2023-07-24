import './index.css'

const HistoryItem = props => {
  const {historyListItem, delItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListItem

  const deleteItem = () => {
    delItem(id)
  }

  return (
    <li className="each-list">
      <p className="time-sty">{timeAccessed}</p>
      <div className="domain-details">
        <img className="domain-log-sty" src={logoUrl} alt="domain logo" />
        <div className="domain-details-pera">
          <p className="title-sty">{title}</p>
          <p className="url-sty">{domainUrl}</p>
        </div>
      </div>
      <button
        className="button-sty"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
