class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    if (!localStorage.getItem("count")) {
      localStorage.setItem("count", "0");
    } else {
      try {
        const count = parseInt(localStorage.getItem("count"), 10);
        if (!isNaN(count)) {
          this.setState(Object.assign({}, this.state, { count: count }));
        } else {
          localStorage.setItem("count", "0");
        }
      } catch (e) {
        console.error(e);
        alert(`Error: ${e}`);
        localStorage.setItem("count", "0");
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count.toString());
    }
  }
  handleAddOne() {
    const nextState = Object.assign({}, this.state, {
      count: this.state.count + 1
    });
    this.setState(nextState);
  }
  handleMinusOne() {
    const nextState = Object.assign({}, this.state, {
      count: this.state.count - 1
    });
    this.setState(nextState);
  }
  handleReset() {
    const nextState = Object.assign({}, this.state, { count: 0 });
    this.setState(nextState);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
