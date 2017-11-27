import { h, Component } from 'preact';

import { api } from '../../utils/api';

export default class Home extends Component {
	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('Currency submitted: ' + this.state.value);
		event.preventDefault();
	}

	constructor(props) {
		super(props);
		this.state = {
			value: '54',
			time: Date.now()
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 10000);

		api.fetchCurrency(this.state.value)
			.then((result) => {
				console.log(result);
			});
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render({  }, { time, money }) {
		return (
			<div class="home">
				<form
					class="search"
					onSubmit={this.handleSubmit}
				>
					<Input
						medium
						type="number"
						value={this.state.value}
						onChange={this.handleChange}
						autofocus
					/>
					<Button
						info medium
					>
						Convert!
					</Button>
				</form>


			</div>
		);
	}
}
