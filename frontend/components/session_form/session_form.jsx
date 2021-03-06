import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);

  }

  render(){
    let text = this.props.formType === "signup" ? "Sign Up" : "Login";
    let linkTo = this.props.formType === "signup" ? "/login" : "/signup";
    let linkToText = linkTo === "/signup" ? "Sign Up" : "Login";
    return(
      <div>
        <h3>{text}</h3>
          <ul>
            {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input
                type="text"
                onChange={this.update("username")}
                value={this.state.username}/>
            </label>

            <label>Password:
              <input
                type="password"
                onChange={this.update("password")}
                value={this.state.password}/>
            </label>
            <input type="submit" value={text}></input>
          </form>

          <Link to={linkTo}>{linkToText}</Link>
      </div>
    );
  }
}

export default SessionForm;
