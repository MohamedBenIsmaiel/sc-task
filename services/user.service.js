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

    const createdUser = await userRepo.createUser({
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

    return createdUser
  }
  return user
}
getUser('najmushsaaquib').then(msg => console.log(msg))
module.exports = { getUser }
