import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handlePick = () => {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const choice = this.state.options[randomNum];
      this.setState(() => ({ selectedOption: choice }));
    });
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOne = (optionToRemove) => {
   this.setState((prevState) => ({
     options: prevState.options.filter((option) => optionToRemove !== option)
   }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'You must enter a valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  handleClearSelected = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      //grab whatever is saved in local storage to display as options
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      //set the state to reflect localStorage but only if there are options saved
      if (options) {
        this.setState(() => ({ options }));
     }
    } catch (e) {
      //do nothing if this doesn't succeed
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //save the options array into local storage
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  render() {

    return (
      <div>
        <Header />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOne={this.handleDeleteOne}
              />
            <AddOption
              handleAddOption={this.handleAddOption}
              />
          </div>
        </div>
        <OptionModal
          ariaHideApp={false}
          selectedOption={this.state.selectedOption}
          handleClearSelected={this.handleClearSelected}
        />
      </div>
    );
  }
};

export default IndecisionApp;