import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="75"
					height="75"
					fill="currentColor"
					class="bi bi-clock"
					viewBox="0 0 20 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
				</svg>
			</div>
			<div className="six"> {props.digitSix % 10}</div>
			<div className="five"> {props.digitFive % 10} </div>
			<div className="four"> {props.digitFour % 10} </div>
			<div className="three"> {props.digitThree % 10} </div>
			<div className="two"> {props.digitTwo % 10} </div>
			<div className="one"> {props.digitOne % 10} </div>
		</div>
	);
}


SimpleCounter.PropTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default Home;
