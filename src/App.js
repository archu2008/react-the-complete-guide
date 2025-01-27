import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge}];
     
    });
    console.log(usersList);
    };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList user1={usersList}/>
    </div>
  );
}

export default App;
