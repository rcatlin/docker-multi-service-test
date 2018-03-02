import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'request';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Enter your name to say hi',
      name: '',
      processing: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.value.trim().replace(/\s/g, '');
    this.setState({ name: name });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      message: 'Saying hi...',
      processing: true
    });

    const params = {
      body: {
        query: `{
          greeting(name:"${this.state.name}")
        }`
      },
      json: true,
      method: 'POST',
      uri: this.props.apiEndpoint
    };

    const handler = (err, resp, body) => {
      let message;

      if (err) {
        message = 'Error: ' + err.message;
      } else if (resp.statusCode != 200) {
        message = "We received a bad response";
      } else {
        message = body.data.greeting;
      }

      this.setState({
        message: message,
        processing: false
      });
    };

    request(params, handler);
  }

  render() {
    return (
      <div>
        <h3>Enter your name</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="your name here"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="submit"
            value="Say Hi"
            disabled={this.state.name.length <= 0}
          />
        </form>

        <div>
          <h3>Output:</h3>
          <span>{this.state.message}</span>
        </div>

      </div>
    )
  }
}

App.propTypes = {
  apiEndpoint: PropTypes.string.isRequired
};

export default App;
