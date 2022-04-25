import React from "react";
import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";



export default class App extends React.Component {
	constructor(props) {
        super(props); // Обязательно

		this.state = {
		    player: props.player ? props.player : "1"
		};
        //this.updateTime = this.updateTime.bind(this);
		//this.change = this.change.bind(this);
        //this.getPlayer = this.getPlayer.bind(this);

    }
	getPlayer() {
		return (this.state.player);
	}
	
	chahge() {
		if(this.state.player == '1'){
			this.setState({player: '2'});
			
		}
	}
		
	componentDidMount() {
		//setInterval(this.updateTime, 1000);
	}
		
	
    render (){
		return (
		<div><Clock player='1' />
		
		</div>
	  );
	}
}



