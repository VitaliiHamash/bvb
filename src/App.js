import React  from 'react';
import logo from './logo.svg';
import './App.css';


import { Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';
import Button from '@material-ui/core/Button';

class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      //filters : this.props.food.name, // We can add from this.props.food after APPLY button on filter.js
      
      page : 1,
      refreshing : false,
      
    }
  }
  
  
  componentDidMount(){
    this.props.fetchUsers('stackoverflow', '1')
    
  }
  
  updatePages(){
    this.props.fetchUsers('stackoverflow', '2')
  }
   
  
  render() {
    console.log(this.props)
    
    return this.props.list.loading ? (
            <h2>Loading</h2>
          ) : this.props.list.error ? (
            <h2>{this.props.list.error}</h2>
          ) : (
            <div className="App">
            <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />
              <Input placeholder="search tags"></Input>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                filter
              </a>
          </header>
          <div className="Background">
              <h2>Questions List</h2>
              <ul className="List">
                {this.props.list &&
                  this.props.list.items &&
                  this.props.list.items.map(item => <li ><a href={item.link}>{item.title}</a></li>)}
              </ul>
              <Button variant="contained" color="secondary" href="#contained-buttons">
                 Load More
              </Button>
          </div>
          </div>
          )
          
          
          
      
    
  }
}


const  mapStateToProps = (state) => {
  console.log(state)
    return {
        list: state.listReducer,
        food: state.foodReducer.foodList
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:(filters, page) => dispatch(fetchUsers(filters,page))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
