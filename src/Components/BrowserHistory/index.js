import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class BrowseHistory extends Component {
  state = {
    searchInput: '',
    initialHistory: initialHistoryList,
  }

  getSearchInput = event => this.setState({searchInput: event.target.value})

  onDelete = id => {
    const {initialHistory} = this.state
    const filteredList = initialHistory.filter(eachList => eachList.id !== id)
    this.setState({initialHistory: filteredList})
  }

  render() {
    const {searchInput, initialHistory} = this.state

    const searchResult = initialHistory.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let emptyHistory

    if (searchResult.length === 0) {
      emptyHistory = (
        <p className="empty-history-text">There is no history to show</p>
      )
    } else {
      emptyHistory = null
    }

    return (
      <div className="bg-con">
        <nav className="nav-bar">
          <img
            className="history-log-sty"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-con">
            <img
              className="search-log-sty"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="input-sty"
              type="search"
              placeholder="Search history"
              onChange={this.getSearchInput}
            />
          </div>
        </nav>
        <ul className="each-list-sty">
          {searchResult.map(eachList => (
            <HistoryItem
              historyListItem={eachList}
              key={eachList.id}
              delItem={this.onDelete}
            />
          ))}
          {emptyHistory}
        </ul>
      </div>
    )
  }
}

export default BrowseHistory
