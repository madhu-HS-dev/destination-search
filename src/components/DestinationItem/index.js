// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationsListDetails} = this.props
    const {name, imgUrl} = destinationsListDetails

    return (
      <li className="item-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="item-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
