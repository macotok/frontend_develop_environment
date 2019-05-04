const test = 'Hello World';
console.log(test);

async function showGitHubOrganizationReposCount(name) {
  const res = await fetch(`https://api.github.com/orgs/${name}`);
  const org = await res.json();
  console.log(org.public_repos);
}

showGitHubOrganizationReposCount('codegrid');
