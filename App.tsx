import * as React from 'react';
import './style.css';

export default function App() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSumbit = () => {
    console.log(name, password);
  };

  return (
    <div className="background">
      <div className="loginForm">
        <h2> LOGIN </h2>
        <label>Email</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Email"
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />

        <button onClick={handleSumbit}>Submit</button>
      </div>
    </div>
  );
}
