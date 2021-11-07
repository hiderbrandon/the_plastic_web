import './App.css';
import Slider from './components/Slider'
import Cards from './components/Cards'
import Location from './components/Location'
function App() {
  return (
    <div className="App" >
      <h2>slider</h2>
      <Slider></Slider>
      <h2>Catalog</h2>
      <Cards></Cards>
      <h2>Location</h2>
      <Location></Location>
    </div>
  );
}

export default App;
