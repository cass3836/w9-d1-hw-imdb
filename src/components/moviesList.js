import React, {Component} from 'react';
import Movie from './movie';

class MoviesList extends Component{

  render(){
      console.log('hello there', this.props.data);
    const movies = this.props.data.map((movie) => {
      return(
      <Movie movie={movie} key={movie.id}/>
      );
    });
    console.log('movies', movies);
    return (
        <div>
          {movies}
        </div>
    );
  }

}

export default MoviesList;
