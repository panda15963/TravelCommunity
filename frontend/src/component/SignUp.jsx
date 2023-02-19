import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
//Features for Main Pages
import Menubar from "../component/navbar";
import Footer from "../component/footer";
import '../assets/css/signUp.scss';
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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users/register/", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,        
        password2: this.state.password2,
      })
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/login");
      });
  }
  render() {
    return (
      <>
        <Menubar />
        <div className="page-content">
          <div className="form-v4-content">
            <div>
              <img style={imageStyle} src={`${process.env.PUBLIC_URL}/img/components/signup.png`} alt="" />
            </div>
            <form className="form-detail" method="post" id="myform" onSubmit={this.handleSubmit}>
              <h2>SIGN UP FORM</h2>
              <div className="form-row form-row-1">
                <label htmlFor="user_name">Username</label>
                <input type="text" name="username" id="username" defaultValue={this.state.username} onChange={this.handleChange} className="input-text" required />
              </div>
              <div className="form-row form-row-1">
                <label htmlFor="your_email">Your Email</label>
                <input type="text" name="email" id="email" defaultValue={this.state.email} onChange={this.handleChange} className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
              </div>
              <div className="form-row form-row-1 ">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" defaultValue={this.state.password} onChange={this.handleChange} className="input-text" required />
              </div>
              <div className="form-row form-row-1">
                <label htmlFor="comfirm_password">Comfirm Password</label>
                <input type="password" name="password2" id="password2" defaultValue={this.state.password2} onChange={this.handleChange} className="input-text" required />
                <Link style={linkStyle} to="/SignIn">Have An Account?</Link>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" defaultValue="Register" />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}