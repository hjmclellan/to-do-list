import React, {useState} from 'react';
import Input from './components/Input';
import Chore from './components/Chore';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container" style={{ width: "800px" }}>
      {list.map((chore, i)=> (
        <Chore chore={chore} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;
