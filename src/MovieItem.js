import React, { Component } from 'react';
import './App.css';

class MovieItem extends Component {

    renderT = () =>{
        if(this.props.torrents){
                    
        }
    }
    render(){
        return(
            
            <div className="col-xs-3">
            <div className="thumbnail">
                <img src={this.props.image} alt={this.props.title} className="img-responsive img-rounded" />
                <div className="caption">
                    <h4>{this.props.title}</h4>
                    {
                    this.props.torrents.map((t,i)=>{
                        return(
                            <a href={t.url} className="btn btn-sm btn-success">{t.quality}</a>
                        )
                    })
                }
                 </div>
            </div>
            </div>
        );
    }
}

export default MovieItem;