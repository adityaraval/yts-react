import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './App.css';

class MovieResultContainer extends Component {

    renderConditionally= ()=> {
// check is wrong, empty object is received. use _.isEmpty or change initital data. also use truthy/falsy check instead of != null, prefer === instead of ==
        if(this.props.data!=null && this.props.data.movies){
            return <div>
            {
                this.props.data.movies.map((item,i)=>(
                (i%4===0 && i!==0 && i!==4 && i!==8 && i!==12 && i!==16 && i!==20)?
                <div className="row">
                <MovieItem key={i} image={item.medium_cover_image}
                title={item.title_long} rating={item.rating} torrents={item.torrents} />
                </div>:
                <MovieItem key={i} image={item.medium_cover_image}
                title={item.title_long} rating={item.rating} torrents={item.torrents} />))
            }
            </div>;
        }else{
            return (<h1>No Movies Loaded</h1>);
        }
    }
    render(){
        return(
            <div>
                {this.renderConditionally()}
            </div>
        );
    }
}

export default MovieResultContainer;