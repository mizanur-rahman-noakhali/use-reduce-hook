import logo from './logo.svg';
import './App.css';
import ReduceCount from './components/ReduceCount/ReduceCount';
import PatientManagement from './components/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
    <ReduceCount></ReduceCount>
    <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
