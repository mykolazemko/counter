import React from 'react';
import firebase from 'firebase';
import fire from '../config/fire';
import Timer from '../Timer/Timer'

class Home extends React.Component{
    constructor(props){
        super(props);
       
    }
    logOut(){
        fire.auth().signOut();
    }
   



    render(){
        return(
            <div>
               
                <Timer />
                <button onClick = {this.logOut}>LogOut</button>
               
            </div>
        )
    }
}

export default Home