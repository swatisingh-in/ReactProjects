const root = document.getElementById("app");

let visibilty = false;

const onButtonClick = () => {
  visibilty = !visibilty;

  renderTemplate();
}

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ onButtonClick }>
        {
          visibilty ? "Hide Details" : "Show Details"
        }
      </button>
      { visibilty ? <p>We have some text to show!</p> : "" }
    </div>

  )
  ReactDOM.render(template, root);
}

renderTemplate();
