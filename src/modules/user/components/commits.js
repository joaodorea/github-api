import React from "react";

export default function CommitsList({ list, children }) {
  return (
    <ul className="commitList">
      <h3>
        Lista de <i>commits</i>
      </h3>
      {children}
      {list.map(commit => (
        <li key={commit.node_id}>
          <p className="msg">{commit.commit.message}</p>
          <small className="sha">{commit.sha}</small>
        </li>
      ))}
    </ul>
  );
}
