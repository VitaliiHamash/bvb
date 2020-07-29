import React  from 'react';
import logo from './logo.svg';
import './App.css';


import { Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';


class App extends React.Component {
  
  
  componentDidMount(){
  
    this.props.fetchUsers('stackoverflow')
    
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
              <h2>Users List</h2>
              <ul>
                {this.props.list &&
                  this.props.list.items &&
                  this.props.list.items.map(item => <li>{item.title}</li>)}
              </ul>
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
        fetchUsers:(filters)=> dispatch(fetchUsers(filters))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
