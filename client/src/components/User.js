import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const fetchUsers = async () => {
    const res = await fetch("/users");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteItem = (id) => {
    axios.delete("/users/" + id);
  };

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    axios.post("/users", newUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={addUser}>Register</button>
      </form>
      <div
        style={{ border: "3px solid red", display: "flex", flexWrap: "wrap" }}
      >
        {users.map((user) => {
          return (
            <div style={{ border: "1px solid blue", width: "10rem" }}>
              <h4>Username: {user.username}</h4>
              <h4>Email: {user.email}</h4>
              <h4>Password: {user.password}</h4>
              <button
                onClick={() => {
                  deleteItem(user._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
