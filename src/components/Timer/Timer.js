import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
  
    constructor() {
        super();

        this.state ={
            alert:{
                type:'',
                message:'',
                
            },
            time: 0,
            pausado: false,
            botones: false
        };

        this.times = {
            defaultTime: 1500, //25min
            shortBreak: 300, //5min
            longBreak: 900, //15min
        }
    }

    componentDidMount(){
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.setState({
            time: this.times.defaultTime
        })
    }

    //Butons
    setTimeForWord = ()=>{
        this.setState({
            alert:{
                type: 'work',
                message: 'Chambea'
            }
        })    

        this.setTime(this.times.defaultTime);
    }
    
    setTimeForShort = ()=>{
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'toma tu descansito'
            }
        })    
        this.setTime(this.times.shortBreak);
    }

    setTimeForLong = ()=>{
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'toma tu descansote'
            }
        })   
        this.setTime(this.times.longBreak); 
    }

    setTime =(newTime) =>{
        this.setState({
            botones: true,
        })
        this.restartInterval();
               this.setState({
            time: newTime
        })
        
    }

    countDown = ( )=>{
        let pau = this.state.pausado;
        let n;
        if (pau === true){
            n = 0;
        }
        else {
            n = 1;
        }
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeep',
                }
            })
        }
        else{
            this.setState({
                time : this.state.time -n
            });
        }
    }

    restartInterval = () =>{
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);

    }

    displayTimer(Time) {
        let minute = Math.floor((Time / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = Time % 60;
        second = (second < 10)? '0' + second : second;
        return `${minute}:${second}` 

    
    }

    pausar = () =>{
      let pau = this.state.pausado;

      pau = !pau;

      this.setState({
        pausado: pau
      })
    }

    detener = () =>{
         
        this.setTime(this.times.defaultTime);
        this.setState({
            botones: false,
            alert:{
                type: '',
                message: ''
            }
        })  
        clearInterval(this.interval);
        
    }
    
    render() {

        const {alert: {message, type}, time, pausado, botones} = this.state;

        return (
        <div className="Pomodoro">
            <div className={`alert ${type}`}>
                {message}
            </div>

            <div className="timer">
                {this.displayTimer(time)}
            </div>

            <div className="types">
                <button className="start"
                        onClick= {this.setTimeForWord}
                >
                    Comenienza a chambiar
                </button> 
                <button className="short"
                        onClick= {this.setTimeForShort}
                >
                    Descansito
                </button>      
                <button className="long"
                        onClick= {this.setTimeForLong}
                >
                    Descansote
                </button>     
                <br/>
                <div className= {botones ? 'Estar': 'NoEstar'}>
                    <button className = 'pause'
                    onClick = {this.pausar}
                    >
                        <i className={pausado ? 'fa fa-play': 'fa fa-pause'}/>
                    </button>
                    
                    <button className ="Stop"
                    onClick= {this.detener}
                    >
                        <i className = 'fa fa-stop'/>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default Timer;