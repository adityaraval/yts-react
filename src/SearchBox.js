import React, { Component } from 'react';
import './App.css';

class SearchBox extends Component {

    constructor(props){
        super(props);
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onHandleChangeTerm = this.onHandleChangeTerm.bind(this);
        this.onHandleChangeQuality = this.onHandleChangeQuality.bind(this);
        this.onHandleChangeGenre = this.onHandleChangeGenre.bind(this);
        this.onHandleChangeRating = this.onHandleChangeRating.bind(this);
        this.onHandleChangeOrderBy = this.onHandleChangeOrderBy.bind(this);
        
        this.state = {
            url:"",
            data:{},
            term:"",
            quality:"",
            genre:"",
            minimum_rating:"",
            sort_by:""
        }
    }
    
    onHandleChangeTerm(event){
        this.setState({term:event.target.value})
    }
    
    onHandleChangeQuality(event){
        this.setState({quality:event.target.value})
    }
    
    onHandleChangeGenre(event){
        this.setState({genre:event.target.value})
    }
    
    onHandleChangeRating(event){
        this.setState({minimum_rating:event.target.value})
    }
    
    onHandleChangeOrderBy(event){
        this.setState({sort_by:event.target.value})
    }

    onFormSubmit(event){
        console.log("Child",this.state);
            event.preventDefault();
            this.props.onSubmitForm(this.state.term,this.state.quality,this.state.genre,this.state.minimum_rating,this.state.sort_by);
    }
  render() {
    return (
    <div className="row">
        <form onSubmit={this.onFormSubmit}>
            <div className="form-group col-md-4">
                <label>Search Term</label>
                <input type="text" onChange={this.onHandleChangeTerm} className="form-control" placeholder="Enter search term" />
            </div>
            <div className="form-group col-md-2">
                <label>Quality</label>
                <select name="quality" onChange={this.onHandleChangeQuality} className="form-control" id="exampleSelect1">
                <option>--Choose--</option>
                <option value="3D">3D</option>
                <option value="720P">720P</option>
                <option value="1080P">1080P</option>
                </select>
            </div>
            <div className="form-group col-md-2">
            <label>Genre</label>
                <select name="genre" onChange={this.onHandleChangeGenre} className="form-control" id="exampleSelect1">
                <option>--Choose--</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label>Rating</label>
                <select name="minimum_rating" onChange={this.onHandleChangeRating} className="form-control" id="exampleSelect3">
                <option>--Choose--</option>
                <option>9+</option>
                <option>8+</option>
                <option>7+</option>
                <option>6+</option>
                <option>5+</option>
                <option>4+</option>
                <option>3+</option>
                <option>2+</option>
                <option>1+</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label>Order By</label>
                <select name="sort_by" onChange={this.onHandleChangeOrderBy} className="form-control" id="exampleSelect4">
                <option>--Choose--</option>
                <option>Latest</option>
                <option>Oldest</option>
                <option>Seeds</option>
                <option>Peers</option>
                </select>
            </div>
            <div className="form-group col-md-2">
            <label></label>
            <button type="submit" name="search" className="btn btn-primary">Search</button>
            </div>
        </form>
     </div>
    );
  }
}

export default SearchBox;
