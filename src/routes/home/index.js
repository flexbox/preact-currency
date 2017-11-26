import { h, Component } from 'preact';
import style from './home';
import { Input, Button } from 'reactbulma';
import { api } from '../../utils/api';

export default class Home extends Component {

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
    // alert('Currency submitted: ' + this.state.value);
    event.preventDefault();
    api.getGithubInfo(flexbox)
      .then(function (result) {
        console.log(result);
      });
    debugger
  }

  render({  }, { time, money }) {
    return (
      <div class={style.home}>
        <form
          class={style.search}
          onSubmit={this.handleSubmit}>
          <input
            type="number"
            class="input is-medium"
            value={this.state.value}
            onChange={this.handleChange}
            autofocus
          />
          <button
            type="submit"
            class="button is-info is-medium"
          >
            Convert!
          </button>
        </form>

        <p>
          <small>
            Current time: {new Date(time).toLocaleString()}
          </small>
        </p>
      </div>
    );
  }
}
