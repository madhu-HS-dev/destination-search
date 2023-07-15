// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="destination-search-container">
        <h1 className="destination-search-heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="input-search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-image"
          />
        </div>
        <ul className="destination-item-container">
          {searchResults.map(eachItem => (
            <DestinationItem
              destinationsListDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
