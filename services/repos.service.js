/* eslint-disable camelcase */
const { repositoryRepo } = require('../repository/index')
const { getUser } = require('./user.service')
const { Github } = require('../helper/index')

async function getRepo (userName, repoName) {
  const user = await getUser(userName)

  const repo = await repositoryRepo.getRepo(repoName)
  if (!repo) {
    const {
      name, description, fork, url, pushed_at, watchers_count,
      language, has_downloads, archived, license, default_branch
    } = await Github.fetchRepo(userName, repoName)

    return repositoryRepo.createRepo({
      UserId: user.id,
      repoName: name,
      description,
      fork,
      url,
      pushedAt: pushed_at,
      watchersCount: watchers_count,
      language,
      hasDownloads: has_downloads,
      archived,
      license,
      defaultBranch: default_branch
    })
  }
  return repo
}

async function getRepos () {
  return repositoryRepo.getRepos()
}

async function getReposByLanguage (language) {
  return repositoryRepo.getReposByLanguage(language)
}

module.exports = { getRepo, getRepos, getReposByLanguage }
