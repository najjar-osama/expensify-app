class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.setBindings();
    this.state = {
      isVisible: false
    };
  }
  setBindings() {
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle App!</h1>
        <button onClick={this.handleToggle}>
          {this.state.isVisible ? "Hide content" : "Show content"}
        </button>
        {this.state.isVisible && <p>Hey I am conent!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
