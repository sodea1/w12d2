import React from 'react';

class Signup extends React.Component {
  //create a local state to keep track of all input fields for our form
  constructor(props) {
    super(props);
    // reference db schema
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // i.e. updating user field...type = username
  handleInput(type) {
    return (e) => {
      // pass in POJO. wrap type in [] so it's evaluated before assigned to key from our state above
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    // when click 'Sign Up' button, create the User with current state, redirect to '/chirps'
    // access to history provided by <Route />
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/chirps'))
  }

  render() {
    return (
      <div className='session-form'>
        <h2>Sign Up!</h2>
        <form>

          <label>Username:
            <input
              type='text'
              value={this.state.username}
              // 'username' arg below is 'type'
              onChange={this.handleInput('username')}
            >
            </input>
          </label>

          <label>Email:
            <input
              type='text'
              value={this.state.email}
              // 'username' arg below is 'type'
              onChange={this.handleInput('email')}
            >
            </input>
          </label>

          <label>Password:
            <input
              type='password'
              value={this.state.password}
              // 'password' arg below is 'type'
              onChange={this.handleInput('password')}
            >
            </input>
          </label>
          
          <button onClick={this.handleSubmit}>Sign Up</button>

        </form>
      </div>
    )
  }
}

export default Signup;