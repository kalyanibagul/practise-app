import React, { Component } from 'react'
import User from './User'
import Guest from './Guest'

//we cannot use conditional rendering in JSX and we only use expression in JSX
export default class App extends Component {

  state = {
    isLoggedIn :false
  };

  clickLogin = () => {
         this.setState({isLoggedIn : true})
  }

  clickLogout = () => {
    this.setState({isLoggedIn : false})
}
  render() {

    const isLoggedIn = this.state.isLoggedIn;
   if (isLoggedIn){
    return <User name ="Ajay" clickData = {this.clickLogout}/>;
   }
   else{
    return <Guest clickData = {this.clickLogin}/>;
   }
   
  }
}
