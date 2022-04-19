import { connect } from 'react-redux';
import  { createNewUser } from '../../actions/session' // actions needed to create new user
import Signup from './signup';


// gives us createNewUser in props inside of signup.js
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);