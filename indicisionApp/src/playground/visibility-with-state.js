class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      visibility: false
    };
  }

  onButtonClick() {
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={ this.onButtonClick }>
          {
            this.state.visibility ? 'Hide Details' : 'Show Details'
          }
        </button>

        { this.state.visibility && <p>We have some text to show!!!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
