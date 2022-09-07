import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })

  const updateUsers = () => {
    setUpdate(!update)
  }

    return (
        <div>
          <h1>Users</h1>
          <button onClick={updateUsers}>Update</button>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
        </div>
    );
}
export default HomePage;