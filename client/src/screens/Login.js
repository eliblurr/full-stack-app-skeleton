import React from 'react';
import '../styles/Login.css'
import logo from '../assets/logo.jpg' 
import {SpinnerGroup} from '../components/spinners'
import {login} from  '../apis/authentication'
import {environment} from '../environment/env.prod'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            failed: false
        };
        this.onSignIn = this.onSignIn.bind(this);
    }

    componentDidMount(){
        this.setState({ isLoading: false ,failed: false})
    }

    componentWillUnmount(){
        this.setState({ isLoading: false ,failed: false})
    }

    onSignIn = async(e) => {
        this.setState({ isLoading: true }) 
        login({
            'email': document.forms["myForm"]["email"].value,
            'password': document.forms["myForm"]["password"].value
        }).then( res => {
            res ? 
            setTimeout( async() => {
                await localStorage.setItem('accessToken',res.data.access_token)
                console.log(localStorage.getItem('accessToken'))
                this.props.history.replace('/home')
            }, 2000) 
        : 
            setTimeout( () => {
                this.setState({ isLoading: false ,failed: true})
            }, 2000) 
            
        })
    }

    render() {
        return (
            <>
            <div className="center">
            {
               this.state.isLoading ?
               <div style={{textAlign:'center'}}> 
                    <SpinnerGroup/>
                    <h6>Loading...</h6>
                </div>
               :  
               <form className="form-signin" name="myForm" onSubmit={this.onSignIn}>
                    <div className="text-center mb-4">
                        <img src={logo} alt="" height="72" onClick={()=>alert(environment.API_URL_BASE)}/>
                        <br/><br/>
                        <h1 className="h3 mb-3 font-weight-normal">Prove you are worthy</h1>
                        <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, Firefox, and IE 10/11 (prefixed).</a></p>
                    </div>

                    <div className="form-label-group">
                        <input type="email" name="email" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" name="password" className="form-control" placeholder="Password" required />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    { this.state.failed ? <div className="alert alert-danger" role="alert" style={{textAlign:'center', marginTop:10}}>failed to authenticate, retry</div> : null }
                </form>
            }    
            </div>
            </>
        )
    }
}

