import {useState,useEffect} from 'react';
import allActions from '../../../redux/actions';
import { useHistory } from "react-router-dom";
import "../assets/Login.css";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({email: "", pass: ""}); 
 const loginData = useSelector(state => state.loginReducer)

 const handleChange = (e) =>{
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
}

const submit = false;

useEffect(() => {
  if(loginData.user)
  validateUser(loginData.user)
 }, [loginData])

  const handleSubmit =async (e) =>{
    e.preventDefault();
    await dispatch(allActions.loginAction(user));
  }
  console.log(loginData)
  const validateUser = (item) =>{
    console.log(item)
    if(item.email === 'abc@gmail.com' && item.pass === 'as'){
      console.log("kwana warka chey wraz dai kha ye")
      history.push('/'); 
    }
    if(item.length==0){
      return;
    }
    if(item.email !== 'abc@gmail.com' || item.pass !== 'as'){
     alert("Entered Details is Invalid")
    }
  }
  return (
    <div className="head">
      <div className="login_wrapper">
        <div className="head_wrap">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="email_label">Username:</label>
          <input
                      type="email"
                      name="email"
                      value={user.email}
                      placeholder="abc@email.com"
                      required
                      onChange={handleChange}
                     className="email_input"           
          />
          <br />
          <label className="password_label">Password:</label>
          <input                       
          type="password"
          name="pass"
            value={user.pass}
            onChange={handleChange}
          />
          <div>
            <button type="submit" className="loginbtn">
              Login
            </button>
          </div>
          <div>
            <button type="facebook" className="facebookbtn">
              Login with <i className="fab fa-facebook-f"></i>
            </button>
          </div>
          <div>
            <button type="google" className="btnGoogle">
              Login with <i className="fab fa-google"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
