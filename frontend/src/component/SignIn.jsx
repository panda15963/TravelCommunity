import { React, Component } from 'react';
import { Link } from 'react-router-dom';
//Features for Main Pages
import Menubar from "../component/navbar";
import Footer from "../component/footer";
import '../assets/css/signIn.scss';
const imageStyle = {
  width: '100%',
  height: '100%',
}
const linkStyle = {
  fontWeight: '600',
  fontSize: '15px',
  color: '#666',
  display: 'block',
  marginBottom: '8px',
}
export default class SignUp extends Component {
  render() {
    return (
      <>
        <Menubar />
        <div className="page-content">
          <div className="form-v4-content">
            <div>
              <img style={imageStyle} src={`${process.env.PUBLIC_URL}/img/components/signin.png`} alt=""/>
            </div>
            <form className="form-detail" method="post" id="myform">
              <h2>SIGN IN FORM</h2>
              <div className="form-row">
                <label htmlFor="your_email">Your Email</label>
                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
              </div>
              <div className="form-row form-row-1 ">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="input-text" required />
                <Link style={linkStyle} to="/ForgotPw">Forgot Password?</Link>
                <Link style={linkStyle} to="/SignUp">Don't Have An Account?</Link>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="SignIn" value="Sign In" />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}