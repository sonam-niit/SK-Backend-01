import logo from './logo.svg';
import './App.css';
import { Upload } from './components/upload';
import { GetAll } from './components/getall';

function App() {
  return (
    <div className="App">
      <Upload />
      <GetAll />
    </div>
  );
}

export default App;
