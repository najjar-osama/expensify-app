// stateless functional component / presentaional components

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Some default title!"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do ?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All!</button>
      <ol>
        {props.options.map((option, index) => {
          return (
            <Option
              key={index}
              item={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <li>
        {props.item}&nbsp;&nbsp;&nbsp;
        <button
          onClick={e => {
            props.handleDeleteOption(props.item);
          }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      errorMessage: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option;
    const errorMessage = this.props.handleAddOption(option.value.trim());
    if (errorMessage) {
      this.setState(
        Object.assign({}, this.state, { errorMessage: errorMessage })
      );
    } else {
      option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
        {this.state.errorMessage && (
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
        )}
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.bindings = [
      "handleDeleteOptions",
      "handlePick",
      "handleAddOption",
      "handleDeleteOption"
    ];
    this.setBindings();
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(Object.assign({}, this.state, { options: options }));
      }
    } catch (e) {
      alert("your data are not valid!");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount!");
  }
  handleDeleteOptions() {
    this.setState(Object.assign({}, this.state, { options: [] }));
  }
  handleDeleteOption(optionToBeRemoved) {
    const nextOption = this.state.options.filter(option => {
      return optionToBeRemoved !== option;
    });
    this.setState(Object.assign({}, this.state, { options: nextOption }));
  }
  handlePick() {
    const options = this.state.options;
    if (this.state.options.length > 0) {
      const pickedOption = Math.floor(Math.random() * options.length);
      alert(options[pickedOption]);
    }
  }
  handleAddOption(option) {
    if (!option) {
      return "please enter a valid option";
    } else if (this.state.options.indexOf(option) >= 0) {
      return "you already entered this option";
    }
    const nextOptions = this.state.options.concat(option);
    this.setState(Object.assign({}, this.state, { options: nextOptions }));
  }
  setBindings() {
    this.bindings.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    }, this);
  }
  render() {
    const title = "Indecision App!";
    const subtitle = "Put your lif in the hands of a computer!";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          removeAll={this.handleDeleteOptions}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

ReactDOM.render(
  <IndecisionApp options={["option one", "options two"]} />,
  document.getElementById("app")
);
