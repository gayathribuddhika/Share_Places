import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Gayathri Buddhika",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fgayathribuddhika&psig=AOvVaw08u-APuTn3FDdbBAIgU84m&ust=1640009367810000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjihJ-F8PQCFQAAAAAdAAAAABAD",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
