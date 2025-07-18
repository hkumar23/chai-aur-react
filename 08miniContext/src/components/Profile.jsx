import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  let { user } = useContext(UserContext);
  if (user == null) return <div>Please Login</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
