import './App.css';
import WifiStatus from './components/wifistatus/wifistatus'
import MapDisplay from './components/map/mapdisplay'
import Location from './components/location/location';


function App() {
  return (
    <div className="App">
      <header>
        <p className = 'title'> IS YOUR WIFI GARBAGE? LET US KNOW: </p>
      </header>
      <div className="page">
        <MapDisplay/>
        <div className="rightSide">
          <Location />
          <WifiStatus/>
        </div>
      </div>
    </div>
  );
}

export default App;