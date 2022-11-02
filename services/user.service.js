/* eslint-disable camelcase */
const { userRepo } = require('../repository/index')
const { Github } = require('../helper/index')

async function getUser (userName) {
  const user = await userRepo.getUser(userName)
  if (!user) {
    const {
      login, avatar_url, type, company, blog, bio, location,
      email, twitter_username, public_repos, followers, following, created_at
    } = await Github.fetchUser(userName)
    return userRepo.createUser({
      userName: login,
      location,
      email,
      avatar: avatar_url,
      type,
      company,
      blog,
      bio,
      twitterUserName: twitter_username,
      publicRepos: public_repos,
      followers,
      following,
      githubJoinedAt: created_at
    })
  }
  return user
}

async function getUsers () {
  return userRepo.listUsers()
}

async function getUsersByLocation (location) {
  return userRepo.getUsersByLocation(location)
}

async function getUserRepos (userName) {
  const user = await userRepo.getUser(userName)
  if (!user) {
    return 'User does not exist on our database '
  }
  return userRepo.getUserRepos(userName)
}

async function getUsersByProgrammingLang (langauge) {
  return userRepo.getUsersByProgrammingLang(langauge)
}

module.exports = { getUser, getUsers, getUsersByLocation, getUserRepos, getUsersByProgrammingLang }
