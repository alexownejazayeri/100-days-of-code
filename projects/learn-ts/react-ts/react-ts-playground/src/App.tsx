import Todos from './components/Todos';
import './App.css';


function App() {
  return (
    <div className="App">
      <Todos items={['Learn React', 'Learn TypeScript']} />
    </div>
  );
}

export default App;