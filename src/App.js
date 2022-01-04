import Title from "./components/Title";
import './App.css';
import Wrapper from "./components/Wrapper";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import Test from "./components/Test";
import {useRef, useState} from "react";

function App() {

  const [num,setNum] = useState(1);

  const users = [
    {
      id : 1,
      username : 'jewoo',
      email : 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username : 'tester',
      email : 'tester@example.com'
    },
    {
      id: 3,
      username : 'id3',
      email : 'liz@example.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current++;
  }

  const onClickBtn = () => {
    setNum(prevState => prevState + 1);
  }

  return (
      // <UserList users={users}></UserList>
      <Test></Test>
  );
}

export default App;
