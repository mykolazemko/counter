import React from 'react';
import firebase from 'firebase';
import fire from '../config/fire';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {timer: 0};
        this.changeTimer = this.changeTimer.bind(this);     
    };
    componentDidMount(){    
        const rootRef = firebase.database().ref().child('react');
        const timerRef = rootRef.child('timer');      
        timerRef.on('value', snap => {
            this.setState({
                timer: snap.val()
            });
        });
        setInterval(this.changeTimer, 1000);
    };
    changeTimer(){       
        //const time = new Date().getSeconds();
        let time = this.state.timer;
        time +=1;
        const rootRef = firebase.database().ref().child('react');
        rootRef.update({
            "timer" : time
        });
    }
  
    render(){
        return(
            <div>
                 <h1>{this.state.timer}</h1>
            </div>
        )
    }
}


export default Timer