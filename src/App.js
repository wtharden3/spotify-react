import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const getData = () => {

  }

  const getAuth = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    console.log(client_id);
  }

  return (
    <div className="App">
      <button className="getData" onClick={getAuth}>Get Data</button>
    </div>
  );
}

export default App;
