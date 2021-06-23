import React from 'react';
import CreaciónDeAdán from '../assets/CreaciónDeAdán.jpg' 
import welcome from '../assets/welcome.gif' 
import '../styles/Homepage.css'
import logo from '../assets/logo.jpg'
import {authenticateToken} from  '../apis/authentication'


// const { innerWidth: width, innerHeight: height } = window;

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onHomeClick = this.onHomeClick.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  onHomeClick = async() => {
    this.props.history.push('/home')
  }

  openItems = async() => {
    // await authenticateToken()
    this.props.history.push('/items')
  }

  signOut = async() => {
    await localStorage.removeItem('accessToken')
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="body-local">
        <nav className="navbar navbar-light bg-light" style={{borderBottomWidth:1,borderBottomColor:'red',width:"100%"}}>
            <a className="navbar-brand" href="" onClick={this.onHomeClick} >
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo goes here" />
              Neutron's Link
            </a>
            <div>
              <button style={{marginRight:10}} className="btn btn-outline-secondary my-2 my-sm-0" onClick={this.openItems} >Test CRUD</button>
              <button className="btn btn-outline-danger my-2 " onClick={this.signOut} >Sign Out</button>
            </div>
          </nav>

        <img src={welcome} alt="here" className="image"/> 
        <img src={CreaciónDeAdán} alt="here" className="image"/> 
        {/* <img src={Creación_de_Adán} className="img-fluid" alt="Responsive image"/> */}
      </div>     
    )
  }
}
