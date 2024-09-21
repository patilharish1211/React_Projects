import { Link } from "react-router-dom";
import axios from "axios"
function Home() {
  return (
    <div>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link> &nbsp;&nbsp;
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
    </div>
  );
}
export default Home;