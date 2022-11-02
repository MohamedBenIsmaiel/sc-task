# sp-task

sp-task is a Node js Cli for dealing with GIthub Api to fetch info about users , repos and commits

## dependencies
#### [*] Nodejs >= v10
#### [*] docker && docker-compose
#### [*] sequelize ORM
for Sql injection Sequelize escapes replacements, which avoids the problem at the heart of SQL injection attacks: unescaped strings. It also supports binding parameters when using SQLite or PostgreSQL, which alleviates the risk further by sending the parameters to the database separately to the query

### ENV
#### don't forget to put .env variables to make the app up you need to put database credentials and github token
## Installation
### step 1:
if you are use linux distros like fedora or debian , give `setup.sh` a permission and run it then open the terminal and write the program name `second-profit`

### step 2:
 if you are not familiar with linux distros and you are using windows , you can follow that

```bash
 git clone https://github.com/MohamedBenIsmaiel/sp-task.git
```
go to the project folder
```bash
 cd sp-task
```
run a docker compose to make postgres database container up
```bash
 docker-compose up -d
```
install dependencies
```bash
 npm i --save
```
then you can lanuch the app 
```bash
 ./index.js --help
```
there is an optional step , to can run the program from any where -inside the folder or out side , you should install it globaly
then you can lanuch the app 
```bash
 npm i -g
```
then open the terminal and write `second-profit --help`

## Usage
to see all the program command
```bash
second-profit --help
```

to find user 
```bash
second-profit --f --u username
```
if the user doesn't exist on the database , it will fetch it from github.

to find repo 
```bash
second-profit --f --u username --r repo name
```
there is alot of options you can use there , like search for users by programming language they used or by their location

## License
[MIT](https://choosealicense.com/licenses/mit/)