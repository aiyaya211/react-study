// import logo from './logo.svg';
import './App.css';
import Logs from './components/logs/Logs';
import Counter from './components/counter/counter'
// import Dcom from './components/Dcom'
// import LogsItem from './components/logsForm/logsForm'
import LogsForm from './components/logsForm/logsForm';

function App() {
  return (
    <div>
      {/* <Dcom /> */}
      <LogsForm></LogsForm>
      <Logs />
      <Counter />
    </div>
  );
}

export default App;
