import React, { Component } from 'react';
import firebase from 'firebase';
import fire from '../config/fire';
import Home from '../Home/Home';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            userName: "noname"
        }
        this.login = document.getElementsByClassName("login");
        this.password = document.getElementsByClassName("password");
        this.loginBtn = document.getElementsByClassName("loginBtn");
        this.signupBtn = document.getElementsByClassName("signupBtn");
        this.logoutBtn = document.getElementsByClassName("logoutBtn");
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.authListener = this.authListener.bind(this);
    }   
    
    componentDidMount(){
        this.authListener();
    };
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            let name = firebase.auth().currentUser;
            //console.log(name)
            if (user){
                this.setState({user})
                this.setState({ userName: name.email });
            } else {
                this.setState({ user: null });
                this.setState({ userName: "noname" });
            }
        })
    };
    logIn(){
        let email = this.login[0].value;
        let pass = this.password[0].value;
        fire.auth().signInWithEmailAndPassword(email, pass)
        .then((e) => {
            console.log("Wellcome")
        })
        .catch((err) => {
            console.log(err.toString());
        })
        
    };
    signUp(){
        let email = this.login[0].value;
        let pass = this.password[0].value;
        fire.auth().createUserWithEmailAndPassword(email, pass)
        .then((e) => {
            console.log("signedUp")
        })
        .catch((err) => {
            console.log(err.toString());
        })
    };   
    render() {
      return (
          <div>
              <h1>{"Hello " + this.state.userName +"!"}</h1>
              {/* <form> */}
                <input className="login" type="email" placeholder="e-mail"/><br/>
                <input className="password" type="password" placeholder="password"/><br/>
                <button className="loginBtn" onClick={this.logIn}>LogIn</button>
                <button className="signupBtn" onClick={this.signUp}>SignUp</button>
                <button className="logoutBtn hide">LogOut</button>
              {/* </form> */}
              {this.state.user ? (<Home/>) : (console.log("logOut"))}
          </div>
      )
    }
  }

export default LoginPage;