#!/usr/bin/env node
const yargs = require('yargs')

const { getUser, getUsersByLocation, getUsers } = require('./services/user.service')

const argv = yargs.options({
  f: { type: 'string', alias: 'find', description: 'find specific user' },
  li: { type: 'null', alias: 'list', description: 'list all users exist on database' },
  loc: { type: 'string', alias: 'location', description: 'list all users in specific location' },
  h: { type: 'string', alias: 'help', description: 'show help screen' }
}).argv

if (argv.f) {
  getUser(argv.f).then(user => console.log(user.dataValues)).catch(e => console.error(e))
} else if (argv.loc) {
  console.log('--loc --location command should follow --li --list command, --help command will help you more ;)')
} else if (argv.li && argv.loc) {
  getUsersByLocation(argv.loc).then(users => users.map(user => console.log(user.dataValues))).catch(e => console.error(e))
} else if (argv.li) {
  getUsers().then(users => users.map(user => console.log(user.dataValues))).catch(e => console.log(e))
} else if (argv.h) {
  console.log(`
    Options:
       --help       show help
       --f --find   find specific user
       --li --list  list all users on the database
            --loc --location list all users based on location
`)
} else {
  console.log(`
        Options:
           --help       show help
           --f --find   find specific user
           --li --list  list all users on the database
                --loc --location list all users based on location
   `)
}
