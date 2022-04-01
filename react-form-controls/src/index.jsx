import React from 'react'
import ReactDOM from 'react-dom/client'

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>Email</span>
        <input type="text" value={this.state.email} onChange={this.handleChange}></input>
        <input type="submit" value="Sign Up"></input>
      </form>
    );
  }
}

const element = <NewsletterForm />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
