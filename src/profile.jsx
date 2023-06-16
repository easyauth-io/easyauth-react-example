import React from "react";
import { useUser } from "@easyauth.io/easyauth-react";

const Profile = () => {
  const { isAuthenticated, user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <li>Email: {user.email}</li>
      <li>Email verified: {JSON.stringify(user.emailVerified)}</li>
      <li>Phone: {user.phone}</li>
      <li>Phone verified: {JSON.stringify(user.phoneVerified)}</li>
    </ul>
  );
};

export default Profile;
