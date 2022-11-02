#!/usr/bin/env node
const { getArgsOption, runCMD } = require('./CMD/cmd')

runCMD(getArgsOption())
