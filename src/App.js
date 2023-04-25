import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' className="App-logo" />
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
