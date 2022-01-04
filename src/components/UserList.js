const User = ({user}) => {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

const UserList = ({users}) => {

    return (
        <div>
            {
                users.map((el) => <User user={el} key={el.id}></User>)
            }
        </div>
    )
}

export default UserList;