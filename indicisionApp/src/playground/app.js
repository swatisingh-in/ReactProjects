class IndecisionApp extends React.Component{
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOptions = this.handlePickOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const data = JSON.parse(json);

      if (data) {
        this.setState(() => ({
          options:data
        }));
      }
    }

    catch(e) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePickOptions() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid task!!';
    }

    else if(this.state.options.indexOf(option) > -1) {
      return 'Task already exists!!';
    }

    this.setState((prevState) => ({options:prevState.options.concat([option])}));

  }

  render() {
    const subtitle = "Put your life in hands of a computer";
    return (
      <div>
        <Header subtitle={ subtitle }/>
        <Action
          hasOptions = { this.state.options.length > 0 }
          handlePickOptions = {this.handlePickOptions}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions = { this.handleDeleteOptions }
          handleDeleteOptionSingular = { this.handleDeleteOptionSingular }
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      { props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title:"Indecision App"
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={ props.handlePickOptions }
        disabled={ !props.hasOptions }
      >What should I do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!!</p>}
      {
        props.options.map((option) => <Option
          text={option}
          key={option}
          handleDeleteOptionSingular = { props.handleDeleteOptionSingular }
        />)
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.text}
      <button
        onClick = {(e) => {
          props.handleDeleteOptionSingular(props.text)
        }}
      >Remove</button>
    </div>
  );
};

class AddOption extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if(!error)
      e.target.elements.option.value = ""
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
