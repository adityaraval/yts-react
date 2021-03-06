import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MovieResultContainer from './MovieResultContainer';
import NavBar from './NavBar';
import axios from 'axios';
import './App.css';

class App extends Component {

constructor(props){  
  super(props);
  this.state={data:{}};
}

getMovies = (term,quality,genre,minimum_rating,sort_by) => {
  const BASE_URL = "https://yts.ag/api/v2/";
  const GET_MOVIES = "list_movies.json"
  let URL = BASE_URL+GET_MOVIES+'?query_term='+term+'&quality='+quality+'&genre='+genre+'&minimum_rating='+minimum_rating+'&sort_by='+sort_by+'&limit=20';
    axios.get(URL)
    .then((response) => {
      console.log(response.data.data);
      this.setState({data:response.data.data});
    })
    .catch((error) => {
      console.log(error);
    });
}

onSubmitForm = (term,quality,genre,minimum_rating,sort_by)=>{
  this.setState({
    query_term:term,
    quality:quality,
    genre:genre,
    minimum_rating:minimum_rating,
    sort_by:sort_by
  });
  this.getMovies(this.state.query_term,this.state.quality,this.state.genre,this.state.minimum_rating,this.state.sort_by);
  console.log("Parent:",this.state);
}
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <SearchBox onSubmitForm={this.onSubmitForm} />
          <MovieResultContainer data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
