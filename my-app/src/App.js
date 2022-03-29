import React from "react";
import logo from './logo.svg';
import './App.css';



export default class App extends React.Component {
	 constructor(props) {
 super(props); // Обязательно
 this.player = props.player ? props.player : "red";
 }
  render (){
	let currentTime = new Date().toLocaleTimeString();
  return (
    <div className="App" style={{

		margin: '30px auto',
		border:'4px solid black',
		width: '100px',
		height: '100px',
	    }}>
		<p>{this.player}</p>
		<p>{currentTime}</p>
	</div>
  );
}
}



