console.log("app is running");

const app = {
  title: "Indecision App",
  subtitle: "let's learn new stuff",
  options: []
};

const numbers = [55, 653, 565];

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  console.log(randomNumber);
};
const removeAll = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}!</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <p>{app.options.length > 0 ? "Here are your options!" : "No options!"}</p>

      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
