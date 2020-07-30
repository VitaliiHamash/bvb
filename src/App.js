import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';


import { Input} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';
import Button from '@material-ui/core/Button';

class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      //filters : this.props.food.name, // We can add from this.props.food after APPLY button on filter.js
      page : 2,
      search: '',

      
    }
    this.updatePages = this.updatePages.bind(this)
  }
  

  updateSearch(event) {
    this.setState({search:event.target.value.substr(0,20)});
  }
  
  componentDidMount(){
    this.props.fetchUsers('stackoverflow', '1')
  
  }
  
  updatePages(){
   this.setState({
      page : this.state.page + 1
    })
    this.props.fetchUsers('stackoverflow', this.state.page)
  }
   
  
  render() {
    console.log(this.props)
    console.log(this.state)
    let filtered = this.props.list.items.filter(item => {
      let i = 0
      for (i; i <= item.tags.length; i++) {
         return item.tags[i].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
      
})
    setTimeout(() => {
      console.log(filtered)
    }, 2000)
    
    return this.props.list.loading ? (
            <h2>Loading</h2>
          ) : this.props.list.error ? (
            <h2>{this.props.list.error}</h2>
          ) : (
            <div className="App">
            <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />
              <Input placeholder="search tags" value={this.state.search} onChange={this.updateSearch.bind(this)}></Input>
              <Modal />
          </header>
          <div className="Background">
              <h2>Questions List</h2>
              <ul className="List">
                {this.props.list &&
                  this.props.list.items &&
                  filtered.map(item => <li><a href={item.link}>{item.title}</a></li>)}
              </ul>
              <Button onClick={this.updatePages} variant="contained" color="secondary" href="#contained-buttons">
                 Load More
              </Button>
          </div>
          <footer class="footer"></footer>
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
