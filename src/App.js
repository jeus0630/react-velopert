
import './App.css';
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import {useMemo, useRef, useState} from "react";

function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user=>user.active).length;
}

function App() {
  const [inputs,setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users, setUsers] = useState([

    {
      id : 1,
      username : 'jewoo',
      email : 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username : 'tester',
      email : 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username : 'id3',
      email : 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4);

  const onToggle = (id) => {
    setUsers(users.map(user=>user.id == id ? {...user,active : !user.active} : user));
  }

  const onCreate = () => {
    setUsers([
        ...users,
      {
        id : nextId.current,
        username,
        email
      }
    ]);
    setInputs({
      username : '',
      email : ''
    })
    console.log(nextId.current);
    nextId.current++;
  }

  const onRemove = (id) => {
    setUsers(prevState => prevState.filter(user => user.id !== id));
  }

  const count = useMemo(()=>countActiveUsers(users),[users]);

  return (
      <>
        <CreateUser username={username}
                    email={email}
                    onCreate={onCreate}
                    onChange={onChange}
                    >
        </CreateUser>
        <UserList users={users}
                  onRemove={onRemove}
                  onToggle={onToggle}></UserList>
        <div>활서 사용자 수 : {count}</div>
      </>
  );
}

export default App;
