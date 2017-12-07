import { h, Component } from 'preact';

export default class Header extends Component {
	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	constructor(props) {
		super(props);
		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 10000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render({  }, { time }) {
		return (
			<header class="header">
				<h1>Currency</h1>
				<p>
					<small>
						Last Update: {new Date(time).toLocaleString()}
					</small>
				</p>
			</header>
		);
	}
}
