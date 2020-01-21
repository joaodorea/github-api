import React from "react";

export default function userInformation({ user }) {
  return (
    <div className="userInfo">
      <img alt={user.login} src={user.avatar_url} />
      <h2>{user.login}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
    </div>
  );
}
