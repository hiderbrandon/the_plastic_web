import './App.css';
import Slider from './components/Slider'
import Cards from './components/Cards'
import Location from './components/Location'
function App() {
  return (
    <div className="App" >
      <h2>slider</h2>
      <div><Slider></Slider></div>
      <h2>Catalog</h2>
      <div><Cards></Cards></div>
      <h2>Location</h2>
      <div className="LocationWrapper"><Location></Location></div>
    </div>
  );
}

export default App;
