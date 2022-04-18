import React, { Component } from "react";
import Goals from './Goals.jsx';
import UserInput from './UserInput'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      goals: [],
      name: null,
      userId: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: "get",
      url: `http://localhost:3000/1/goals`,
      contentType: 'application/json',
      mode: 'cors',
      success: 
        result => {
          this.setState({goals: result});
      }
    })
  };

  FetchGoals(){
    $.ajax({
      type: "get",
      url: `http://localhost:3000/1/goals`,
      contentType: 'application/json',
      mode: 'cors',
      success: 
        result => {
          this.setState({goals: result});
      }
    })

  }

  render() {
    return (
      <div>
        working
        <Goals goals={this.state.goals} />
        <UserInput />
      </div>
    );
  }
}

export default App;