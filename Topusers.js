import React, { useEffect, useState } from "react";
import { fetchTopUsers } from "../services/api";
import UserCard from "../components/UserCard";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h2>Top 5 Users</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TopUsers;
