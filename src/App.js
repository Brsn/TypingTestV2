import React, { Component } from 'react';
import Speed from './Components/Speed';
import Text from './Components/Text';

const initialState = {
  text: 'Test, go ahead and type. See how fast you can go!',
  userInput: '',
  symbols: 0,
  seconds: 0,
  started: false,
  finished: false
}
//object for state values
class App extends Component {

  //state equals initial object values
  state = initialState;

  onRestart = () => {

    this.setState(initialState)
  }

  onUserInputChange = (e) => {
    let userInputValue = e.target.value;
    this.setTimer();
    this.setState({
      userInput: userInputValue,
      symbols: this.countCorrectCharacters(userInputValue)

    })
  }
  countCorrectCharacters(userInput) {
    const text = this.state.text.replace(' ', '')
    //replace the white spaces with ' ', ''
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return { seconds: prevProps.seconds + 1 }
        })
      }, 1000)
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 textArea">
            <Text text={this.state.text} userInput={this.state.userInput} />
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="form-control mb-3 textArea"
              placeholder="Start typing..."
              readOnly={this.state.finished}
            ></textarea>
            <Speed seconds={this.state.seconds} symbols={this.state.symbols} />
            <div className="text-right">
              <button className="btn btn-warning spacing" onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
