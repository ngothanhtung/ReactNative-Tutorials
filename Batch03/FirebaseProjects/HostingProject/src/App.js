import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

  render() {
    return (
      <h1>
        {this.props.title}
      </h1>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    }

  }

  componentWillMount() {
    axios.get('https://us-central1-aptech-reactnative-firebase.cloudfunctions.net/helloWorld')
      .then(response => {
        console.log(response.data);
      })
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, padding: 24, justifyContent: 'center' }}>
        <Header title="Hello Reactjs" />
        {
          this.state.messages && this.state.messages.map((item, index) => (
            <div>
              <h4>
                {item.message}
              </h4>
              <p>
                {item.language}
              </p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
