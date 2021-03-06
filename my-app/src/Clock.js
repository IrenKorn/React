import React from "react";




export default class Clock extends React.Component {
	constructor(props) {
        super(props); // Обязательно
        this.player = props.player ? props.player : "red";

		this.state = {
		    dt: new Date() 
		};
        this.updateTime = this.updateTime.bind(this);
		//setInterval(this.updateTime, 1000);
    }
	componentDidMount() {
		setInterval(this.updateTime, 1000);
	}
		
	updateTime() {
		this.setState({
		    dt: new Date() 
		});
	}
    render (){
		return (
		<div className="Clock" style={{

			margin: '30px auto',
			border:'4px solid black',
			width: '100px',
			height: '100px',
			}}>
			<p>{this.player}</p>
			<p>{this.state.dt.toLocaleTimeString()}</p>
		</div>
	  );
	}
}