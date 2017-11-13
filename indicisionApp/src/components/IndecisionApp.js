import React from 'react'
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  };

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

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePickOptions = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption:option
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid task!!';
    }

    else if(this.state.options.indexOf(option) > -1) {
      return 'Task already exists!!';
    }

    this.setState((prevState) => ({options:prevState.options.concat([option])}));

  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption:undefined
    }))
  }

  render() {
    const subtitle = "Put your life in hands of a computer";
    return (
      <div>
        <Header subtitle={ subtitle }/>
        <div className="container">
          <Action
            hasOptions = { this.state.options.length > 0 }
            handlePickOptions = {this.handlePickOptions}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions = { this.handleDeleteOptions }
              handleDeleteOptionSingular = { this.handleDeleteOptionSingular }
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp;
