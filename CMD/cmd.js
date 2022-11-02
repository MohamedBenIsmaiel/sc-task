const yargs = require('yargs')
const clc = require('cli-color')

const error = clc.red.bold
const warn = clc.yellow

const {
  getUser,
  getUsersByLocation,
  getUsers, getUserRepos,
  getUsersByProgrammingLang
} = require('../services/user.service')
const { getRepo, getRepos, getReposByLanguage } = require('../services/repos.service')

function getArgsOption () {
  return yargs.options({
    f: { type: 'null', alias: 'find', description: 'find user or repo' },
    u: { type: 'string', alias: 'user', description: 'find specific user ' },
    r: { type: 'string', alias: 'repo', description: 'find specific repo' },
    li: { type: 'null', alias: 'list', description: 'list all users or repos' },
    loc: { type: 'string', alias: 'location', description: 'list all users in specific location' },
    rlang: { type: 'string', alias: 'repos-language', description: 'list all repos based on programming language ' },
    uloc: { type: 'string', alias: 'user-location', description: 'list all users based on their location ' },
    repos: { type: 'null', description: 'list all repos' },
    ur: { type: 'string', alias: 'user-repos', description: 'list repos for specific user' },
    ul: { type: 'string', alias: 'user-langauge', description: 'list users based on programming language' },
    h: { type: 'string', alias: 'help', description: 'show help screen' }
  }).argv
}

function runCMD (argv) {
  if (argv.f && argv.u && argv.r) {
    getRepo(argv.u, argv.r).then(repo => console.log(repo.dataValues)).catch(e => console.log(error('Not found !')))
  } else if (argv.f && argv.u) {
    getUser(argv.u).then(user => console.log(user.dataValues)).catch(e => console.error(error('Not found !')))
  } else if (argv.f) {
    console.log(warn('You can not use --f --find without other option like --r or --u, plz see --help command'))
  } else if (argv.li && argv.loc) {
    getUsersByLocation(argv.loc).then(users => users.map(user => console.log(user.dataValues))).catch(e => console.error(error(e.message)))
  } else if (argv.li && argv.repos) {
    getRepos().then(repos => repos.map(repo => console.log(repo.dataValues))).catch(e => console.log(error(e.message)))
  } else if (argv.li) {
    getUsers().then(users => users.map(user => console.log(user.dataValues))).catch(e => console.log(error(e.message)))
  } else if (argv.loc) {
    console.log(warn('--loc --location command should follow --li --list command, --help command will help you more ;)'))
  } else if (argv.rlang) {
    getReposByLanguage(argv.rlang).then(repos => repos.map(repo => console.log(repo.dataValues))).catch(e => console.error(error(e.message)))
  } else if (argv.uloc) {
    getUsersByLocation(argv.uloc).then(users => users.map(user => console.log(user.dataValues))).catch(e => console.error(error(e.meesage)))
  } else if (argv.ur) {
    getUserRepos(argv.ur).then(repos => repos[0]?.dataValues?.Repos.map(repo => console.log(repo.dataValues))).catch(e => console.error(error(e.message)))
  } else if (argv.ul) {
    getUsersByProgrammingLang(argv.ul).then(users => users.map(user => console.log(user.dataValues))).catch(e => console.error(error(e.message)))
  } else if (argv.h) {
    console.log(
    `
    Options:
       --help       show help
       --f --find   find specific user or repo
            --r --repo 
            --u -- user
        Ex: --f --u username 
        Ex: --f --u username --r repo name

       --li --list  list all users , users based on location or repos
            --loc --location 
            --r  --repos
        Ex: --li 
        Ex: --li --loc Egypt
        Ex: --li --repos

        --rlang  --repos-language   list all repos based on programming language
        Ex: --rlang javascript 

        --uloc  --user-location     list all users based on their location
        Ex: --uloc egypt

        --ur   --user-repos         list all repos for specific user
        Ex: --ur username

        --ul   --user-language      list all users based on programming language
        Ex: --ul javscript
   `)
  } else {
    console.log(
      `
      Options:
         --help       show help
         --f --find   find specific user or repo
              --r --repo 
              --u -- user
          Ex: --f --u username 
          Ex: --f --u username --r repo name
  
         --li --list  list all users , users based on location or repos
              --loc --location 
              --r  --repos
          Ex: --li 
          Ex: --li --loc Egypt
          Ex: --li --repos
  
          --rlang  --repos-language   list all repos based on programming language
          Ex: --rlang javascript 
  
          --uloc  --user-location     list all users based on their location
          Ex: --uloc egypt
  
          --ur   --user-repos         list all repos for specific user
          Ex: --ur username
  
          --ul   --user-language      list all users based on programming language
          Ex: --ul javscript
     `)
  }
}

module.exports = { getArgsOption, runCMD }
