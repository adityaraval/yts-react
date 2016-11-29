import React, { Component } from 'react';
import './App.css';

class MovieResultContainer extends Component {

    renderConditionally= ()=> {
// check is wrong, empty object is received. use _.isEmpty or change initital data. also use truthy/falsy check instead of != null, prefer === instead of ==
        if(this.props.data!=null && this.props.data.movies){
            return <div>{this.props.data.movies.map((item,i)=>(<h1>{item.url}</h1>))}</div>; ///fixed this
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
