import './App.css';
import WifiStatus from './components/wifistatus/wifistatus'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to the WiFi Heatmap Display Project!</h3>
        <p>Please follow the README to get started.</p>
      </header>
      <WifiStatus/>
    </div>
  );
}

export default App;
