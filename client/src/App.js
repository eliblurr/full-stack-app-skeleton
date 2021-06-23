import React,{useEffect,useState} from 'react';
import { routes, authRoutes } from "./routes.js";
import './App.css';
import { Switch, Route, Redirect , useHistory} from "react-router-dom";
import { authenticateToken } from  './apis/authentication'
import Login from './screens/Login'
import ErrorPage from './screens/404';
import { Button } from 'react-bootstrap';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  // let history = useHistory()

  // useEffect(() => { 
  //   async function Authenticate(){
  //     let token = await localStorage.getItem('accessToken')
  //     if(token){
  //   //     // authenticate token
  //       const user = await authenticateToken()
  //       console.log(user)
  //       user ? setIsAuthenticated(true) : setIsAuthenticated(false)
  //     }else{
  //       setIsAuthenticated(false)
  //     }
  //   }
  //   Authenticate()
  // },[]);

  return (
    <Switch>     
      <Redirect from='/auth' to='/'/>
      { routes.map( route => <Route exact {...route}/>)}
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
