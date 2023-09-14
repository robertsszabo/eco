import { useState } from "react";

export default function User() {
  const getUser = () => {
    const userObject = localStorage.getItem("user");
    const userData = JSON.parse(userObject);
    return userData ? userData.user : undefined;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData.user);
  };

  return {
    setUser: saveUser,
    user,
  };
}
