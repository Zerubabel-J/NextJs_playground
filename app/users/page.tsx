import React from "react";
import axios from "axios";
const NewUserPage = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user: { id: string; name: string }) => (
          <>
            <li key={user.id}>{user.name}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default NewUserPage;
