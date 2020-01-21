export const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(raw => raw.json())
    .then(resp => resp);
};

export const getRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(raw => raw.json())
    .then(resp => resp);
};

export const getCommits = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then(raw => raw.json())
    .then(resp => resp.splice(1, 20));
};
