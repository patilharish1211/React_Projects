import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext'; // No need for AuthContextProvider here

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { Login, Auth } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password: pass });
      Login(response.data.token); 
      navigate('/Dashboard'); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <form data-testid="login-form" onSubmit={handleLogin}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Login;