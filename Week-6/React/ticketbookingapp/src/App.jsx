import { useState } from "react";
import "./App.css";

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <>
      <h1>Please sign up.</h1>

      <h2>Flight Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>6E-310</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>₹5200</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function UserGreeting() {
  return (
    <>
      <h1>Welcome back</h1>

      <h2>You can now book your tickets.</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
            <td>
              <button>Book</button>
            </td>
          </tr>

          <tr>
            <td>6E-310</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>₹5200</td>
            <td>
              <button>Book</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {isLoggedIn ? (
        <LogoutButton onClick={handleLogout} />
      ) : (
        <LoginButton onClick={handleLogin} />
      )}

    </div>
  );
}

export default App;