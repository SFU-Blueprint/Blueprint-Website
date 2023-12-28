import './App.css';
import GearTrain from "./components/gearTrain";

const gearsData = [
    { imageURL: '/gears/gear-4.svg', diameter: 254 },
    { imageURL: '/gears/gear-1.svg', diameter: 424, angleToPrevious: 225 },
    { imageURL: '/gears/gear-2.svg', diameter: 325, angleToPrevious: 315, initialAngle: 50 },
    { imageURL: '/gears/gear-3.svg', diameter: 333, angleToPrevious: 225, initialAngle: 100 },
    { imageURL: '/gears/gear-5.svg', diameter: 256, angleToPrevious: 315 },
];

function App() {
  return (
    <div className="App">
      <h1>BluePrint</h1>
      <GearTrain gears={gearsData}></GearTrain>
    </div>
  );
}

export default App;
