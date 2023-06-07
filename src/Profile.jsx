import React from "react";
import { useState } from "react";
import { useEasyauth } from "@easyauth.io/easyauth-react";

const Profile = () => {
  const auth = useEasyauth();
  const [profile, setProfile] = useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const token = auth.user?.access_token;
        const response = await fetch(
          process.env.REACT_APP_EASYAUTH_APP_URL + "/tenantbackend/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [auth]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <li>Email: {profile.email}</li>
      <li>Email verified: {JSON.stringify(profile.emailVerified)}</li>
      <li>Phone: {profile.phone}</li>
      <li>Phone verified: {JSON.stringify(profile.phoneVerified)}</li>
    </ul>
  );
};

export default Profile;
