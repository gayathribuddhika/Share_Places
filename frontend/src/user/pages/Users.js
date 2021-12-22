import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Gayathri Buddhika",
      image:
        "https://avatars.githubusercontent.com/u/39160904?v=4",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
