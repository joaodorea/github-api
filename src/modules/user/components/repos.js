import React from "react";

export default function Repositories({ list, getCommits }) {
  return (
    <ul className="reposList">
      <h3>Lista de repositórios</h3>
      {list.map(repo => (
        <li key={repo.id} onClick={() => getCommits(repo.name)}>
          <span className="repoName">{repo.name}</span>
          <span className="repoStars">
            {repo.stargazers_count} <i className="fas fa-star"></i>
          </span>
          <span className="repoForks">
            {repo.forks} <i className="fas fa-code-branch"></i>
          </span>
        </li>
      ))}
    </ul>
  );
}
