import React, { useState } from "react";

import { getUser, getRepos, getCommits } from "../../../utils/api";
import UserInfoHeader from "../components/infoHeader";
import ReposList from "../components/repos";
import CommitsList from "../components/commits";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [commits, setCommits] = useState(null);
  const [filteredCommits, filterCommit] = useState(null);
  const [termToSearch, setTermToSearch] = useState("");

  const submitUser = async e => {
    e.preventDefault();
    if (input === "") {
      alert("Escreva nome do usuário que gostaria de procurar.");
      return;
    }
    resetSearch();
    const info = await getUser(input);
    if (info.message === "Not Found") {
      alert("Usuário não encontrado, tente outro nome.");
      return;
    }
    const userRepos = await getRepos(input);
    setUser(info);
    setRepos(userRepos);
    setCommits(null);
  };

  const getUserCommit = async repoSelected => {
    resetSearch();
    const commitsList = await getCommits(user.login, repoSelected);
    setCommits(commitsList);
  };

  const resetSearch = () => {
    filterCommit(null);
    setTermToSearch("");
  };

  const searchCommitMessage = term => {
    const newList = commits.filter(i => i.commit.message.includes(term));
    setTermToSearch(term);
    filterCommit(newList);
  };

  return (
    <div className="App">
      <form onSubmit={e => submitUser(e)}>
        <input
          type="text"
          value={input}
          placeholder="Procure por um usuário do GitHub. Ex: joaodorea"
          onChange={e => setInput(e.nativeEvent.target.value)}
        />
      </form>

      {user && <UserInfoHeader user={user} />}
      <div className="userContent">
        {repos && <ReposList list={repos} getCommits={getUserCommit} />}
        {commits && (
          <CommitsList list={filteredCommits || commits}>
            <input
              type="text"
              value={termToSearch}
              placeholder="Escreva um termo que gostaria de procurar."
              onChange={e => searchCommitMessage(e.nativeEvent.target.value)}
            />
          </CommitsList>
        )}
      </div>
    </div>
  );
}

export default App;
