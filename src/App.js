import './App.css';
import WifiStatus from './components/wifistatus/wifistatus'
import MapDisplay from './components/map/mapdisplay'


function App() {
  return (
    <div className="App">
      <header>
        <p className = 'title'> IS YOUR WIFI GARBAGE? LET US KNOW: </p>
      </header>
      <MapDisplay/>
      <WifiStatus/>
    </div>
  );
}

export default App;
