import React, { Component } from 'react';
import './App.css';

class MovieResultContainer extends Component {
  
    renderConditionally= ()=>{
        if(this.props.data!=null){
            return(
                <div>
                {
                    JSON.stringify(this.props.data)
                   /* this.props.data.map((item,i)=>{
                        <h1>{item.url}</h1>
                    })*/
                }
                </div>
                );
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
