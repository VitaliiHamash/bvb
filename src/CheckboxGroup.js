import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';
import { addFood } from './actions/food';
import { Button } from "@material-ui/core";



 function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  

  const handleFilters = () =>{
    let data = state 
    console.log(data) 
    let filterList = ''
    
    for (const property in data) {
      if (data[property] === true){
            if (property === 'checkedA') {
              filterList +='&order=asc'
            } 
            if (property === 'checkedB') {
              filterList +='&sort=votes'
            }
            if (property === 'checkedC') {
              filterList +='&fromdate=1595376000'
            }
            if (property === 'checkedD') {
              filterList +='&todate=1596067200'
            }
        
      }
    }
   
    console.log(filterList)
    
    props.add(filterList);
    if (filterList !== ''){
      props.fetchUsers(filterList, '1')
    }
  }
  

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="order"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="sort"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        }
        label="fromdate"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
          />
        }
        label="todate"
      />
       <Button onClick={handleFilters} variant="contained" >Submit</Button>
    </FormGroup>
    
  );
}

const  mapStateToProps = (state) => {
  return {
      list: state.listReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchUsers:(filters)=> dispatch(fetchUsers(filters)),
      add: (food) => dispatch(addFood(food)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckboxLabels);