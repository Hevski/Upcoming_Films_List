import React, {Component} from 'react';
import './film.css'
class Film extends Component {
  render(){
    const {name, url} = this.props
    return(
      <div className="film">
       <li><a href={url}>{name}</a></li>
      </div>
    )
  }
}

export default Film;
