import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
  state = {
    time: Date.now(),
    money: ''
  };

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 10000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Currency submitted: ' + this.state.value);
    event.preventDefault();
  }

  render({  }, { time, money }) {
    return (
      <div class={style.home}>
        <div>Current time: {new Date(time).toLocaleString()}</div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              autofocus
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
