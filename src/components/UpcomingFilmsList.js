import React, {Component} from 'react';
import Film from './Film'
import './filmList.css'
class UpcomingFilmsList extends Component {
  render(){

    const filmNodes = this.props.data.map(film => {
      return (
        <Film key={film.id} name={film.name} url={film.url}></Film>
      )
    })
    return(
      <div className="films-list">
      <hr />
       {filmNodes}
      <hr />
       <a href="https://www.imdb.com/calendar/?region=gb"><button >View more upcoming releases >></button></a>
      </div>
    )
  }
}
 export default UpcomingFilmsList;
