import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


const profile = () => {
  const { user } = useContext(UserContext)

  if (!user) {
    return <h2>Please login to view your profile</h2>
  }
  return (
    <h2>Welcome, {user.username}!</h2>
  )
}

export default profile