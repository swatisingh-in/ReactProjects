let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
  console.log("addOne", count);
};

const minusOne = () => {
  count -= 1;
  renderCountApp();
  console.log("minusOne");
};

const setupReset = () => {
  count = 0;
  renderCountApp();
  console.log("setupReset");
};



const renderCountApp = () => {
  const templateTwo = (
    <div>
      <h1>Count : { count }</h1>
      <button onClick={ addOne }>+1</button>
      <button onClick={ minusOne }>-1</button>
      <button onClick={ setupReset }>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, root);
};

renderCountApp();
