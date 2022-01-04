import {useEffect} from "react";

const User = ({user, onRemove, onToggle}) => {

    useEffect(()=>{
        console.log(user);
    },[user]);

    return (
        <div>
            <b style={{
                color : user.active ? 'green' : 'black',
                cursor : 'pointer'
            }}
            onClick={()=>onToggle(user.id)}>{user.username}</b>
            <span>({user.email})</span>
            <button onClick={()=>{onRemove(user.id)}}>삭제</button>
        </div>
    )
}

const UserList = ({users, onRemove, onToggle}) => {

    return (
        <div>
            {
                users.map((el) => <User
                    user={el}
                    key={el.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                ></User>)
            }
        </div>
    )
}

export default UserList;