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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Currency submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class={style.home}>
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
